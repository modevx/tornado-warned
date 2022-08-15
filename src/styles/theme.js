import { base } from "@theme-ui/presets";
import * as TOKENS from "./design-tokens";

const colors = {
	red: "#f00",
	orange: "#f90",
	yellow: "#ff0",
	green: "#6f0",
	blue: "#06f",
	indigo: "#f0f",
	violet: "#30c",
	white: "#fff",
	smoke: "#ccc",
	slate: "#999",
	steel: "#333",
	black: "#000",
};

const fonts = `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Helvetica, sans-serif`;

export const MODEVX_THEME = {
	config: {
		initialColorModeName: "light",
		useColorSchemeMediaQuery: true,
	},
	// -- RESPONSIVE BREAKPOINTS (CSS length unit as string)
	breakpoints: ["480px", "768px", "900px"],
	// -- SCALES (mapped to specific CSS props)
	fontSizes: [12, 16, 20, 24, 32, 48, 64, 96],
	// -- margin, padding, size
	sizes: [0, 8, 16, 32, 64, 128],
	// scroll layout, insets, positioning, grid layout
	space: [0, 8, 16, 32, 64, 128],
	borders: {},
	borderStyles: {},
	borderWidths: {},
	colors: {
		text: colors.black,
		background: colors.white,
		primary: colors.red,
		secondary: colors.blue,
		accent: colors.yellow,
		highlight: colors.yellow,
		muted: colors.smoke,
		modes: {
			dark: {
				text: colors.white,
				background: colors.black,
			},
		},
	},
	fonts: {
		monospace: 'ui-monospace, "Roboto Mono", Menlo, Consolas, monospace',
		heading: `ui-rounded, ${fonts}`,
		body: `${fonts}`,
	},
	fontWeights: {
		body: 400,
		bold: 700,
		heading: 800,
	},
	letterSpacings: {},
	lineHeights: {
		title: 1,
		heading: 1.125,
		subheading: 1.25,
		caption: 1.375,
		body: 1.5,
	},
	opacities: {},
	radii: { small: 3, default: 6, extra: 9, ultra: 18, circle: 99999 },
	shadows: {},
	transitions: {},
	zIndices: {},
	// -- STYLES (for use with MDX context/Themed component - avoids global CSS)
	// * can use variants in [theme.styles] too
	styles: {
		p: {},
		a: {},
		h1: {
			fontFamily: "heading",
			fontWeight: "heading",
			lineHeight: "heading",
			fontSize: 5,
		},
		h2: {
			fontFamily: "heading",
			fontWeight: "heading",
			lineHeight: "heading",
			fontSize: 4,
		},
		h3: {
			fontFamily: "heading",
			fontWeight: "heading",
			lineHeight: "heading",
			fontSize: 3,
		},
		h4: {
			fontFamily: "heading",
			fontWeight: "heading",
			lineHeight: "heading",
			fontSize: 2,
		},
		h5: {
			fontFamily: "heading",
			fontWeight: "heading",
			lineHeight: "heading",
			fontSize: 1,
		},
		h6: {
			fontFamily: "heading",
			fontWeight: "heading",
			lineHeight: "heading",
			fontSize: 0,
		},
		img: {},
		pre: {},
		code: {},
		ol: {},
		ul: {},
		li: {},
		blockquote: {},
		hr: {},
		em: {},
		table: {},
		tr: {},
		th: {},
		td: {},
		strong: {},
		del: {},
		b: {},
		i: {},
		inlineCode: {},
		thematicBreak: {}, // MDX <hr>
		div: {},
		root: {}, // theme-ui-specific
	},
	// -- VARIANTS (custom style groups)
	// * can ref in the [sx] prop & [theme.styles]
	// * can ref other theme prop values
	text: {
		heading: {
			fontFamily: "heading",
			fontWeight: "heading",
			lineHeight: "heading",
			letterSpacing: "headline",
			mt: 0,
			mb: 0,
		},
		ultratitle: {
			fontSize: [5, 6, 7],
			lineHeight: "title",
			fontWeight: "heading",
			letterSpacing: "title",
		},
		title: {
			variant: "text.heading",
			fontSize: [5, 6],
			letterSpacing: "title",
			lineHeight: "title",
		},
		subtitle: {
			mt: 1,
			mb: 4,
			color: "secondary",
			fontSize: [2, 3],
			fontFamily: "body",
			fontWeight: "body",
			letterSpacing: "headline",
			lineHeight: "subheading",
		},
		headline: {
			fontFamily: "heading",
			fontWeight: "heading",
			letterSpacing: "headline",
			lineHeight: "heading",
			fontSize: 4,
			mt: 3,
			mb: 3,
		},
		subheadline: {
			fontFamily: "heading",
			lineHeight: "subheading",
			fontSize: 3,
			mt: 0,
			mb: 3,
		},
		eyebrow: {
			color: "muted",
			fontSize: [3, 4],
			fontWeight: "bold",
			letterSpacing: "headline",
			lineHeight: "subheading",
			textTransform: "uppercase",
			mt: 0,
			mb: 2,
		},
		lead: {
			fontSize: [2, 3],
			my: [2, 3],
		},
		caption: {
			color: "muted",
			fontSize: 1,
			letterSpacing: "headline",
			lineHeight: "caption",
		},
	},
	buttons: {},
};
