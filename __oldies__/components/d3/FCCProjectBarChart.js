import * as d3 from "d3";
//
// -- DATA
//
const URL =
	"https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
window.innerWidth;
//
// --- LAYOUT DIMENSIONS
//
const DIMS = {
	v: {
		svg: 600,
		margin: 100,
		get graph() {
			return this.svg - this.margin;
		},
	},
	h: {
		svg: window.innerWidth * 0.9,
		margin: 100,
		get graph() {
			return this.svg - this.margin;
		},
	},
};
//
// --- SVG AREA / GROUPS
//
let graph_group, x_axis_group, y_axis_group, svg_area, tooltip;

svg_area = d3
	.select(".bar-graph")
	.append("svg")
	.attr("class", "svg-area")
	.attr("height", DIMS.v.svg)
	.attr("width", DIMS.h.svg)
	.style("margin", "0 auto");

graph_group = svg_area
	.append("g")
	.attr("class", "graph-group")
	.attr("width", DIMS.h.graph)
	.attr("height", DIMS.v.graph)
	.attr("transform", `translate(${DIMS.h.margin / 2}, ${DIMS.v.margin / 2})`);

x_axis_group = graph_group
	.append("g")
	.attr("id", "x-axis")
	.attr("transform", `translate(0, ${DIMS.v.graph})`);

y_axis_group = graph_group.append("g").attr("id", "y-axis");
tooltip = d3
	.select("#bar-graph")
	.append("div")
	.attr("id", "tooltip")
	.attr("class", "tooltip");
//
// -- BAR GRAPH
//
let data,
	x_axis,
	y_axis,
	data_extent_date,
	data_extent_gdp,
	rects,
	x_scaletime,
	y_scalelinear;

d3.json(URL).then(res => {
	data = res.data;
	data_extent_date = d3.extent(data, d => d[0]);
	data_extent_gdp = d3.extent(data, d => d[1]); //built-in min-max method >> minmax of passed data array
	console.log("DATA: ", data.length);

	x_scaletime = d3
		.scaleTime()
		.domain([new Date(data_extent_date[0]), new Date(data_extent_date[1])])
		.range([0, DIMS.h.graph]);

	y_scalelinear = d3
		.scaleLinear()
		.domain([0, data_extent_gdp[1]])
		.range([DIMS.v.graph, 0]); // flip bars right-side-up

	rects = graph_group.selectAll("rect").data(data).enter().append("rect");
	rects
		.attr("data-date", d => d[0])
		.attr("data-gdp", d => d[1])
		.attr("class", "bar")
		.attr("fill", "red")
		.attr("height", d => DIMS.v.graph - y_scalelinear(d[1])) // GDP value
		.attr("width", DIMS.h.graph / data.length)
		// .attr("width", scaleBand()) // [date, gdp]
		.attr("x", d => x_scaletime(new Date(d[0])))
		.attr("y", d => y_scalelinear(d[1]))
		.on("mouseover", d => {
			const data = d.target.__data__;
			const date = data[0];
			const gdp = data[1];
			const month = parseInt(data[0].slice(5, 7));
			const yr = data[0].slice(0, 4);
			let qtr;
			if (month > 9) qtr = "4";
			else if (month > 6) qtr = "3";
			else if (month > 3) qtr = "2";
			else if (month >= 0) qtr = "1";
			else return new Error("[EPH] invalid month read from data");
			tooltip
				.style("display", "flex")
				.html(
					`<div>$${gdp} B</div>
					<div>${yr}Q${qtr}</div>`
				)
				.attr("data-date", date);
		})
		.on("mouseout", () => {
			tooltip.style("display", "none");
		});

	x_axis = d3.axisBottom().scale(x_scaletime);
	x_axis_group.call(x_axis);

	y_axis = d3.axisLeft(y_scalelinear);
	// .tickFormat(d => `$${d}B`);
	y_axis_group.call(y_axis);
	const bars = document.querySelectorAll("rect");
	console.log("BARS: ", bars.length);
});
