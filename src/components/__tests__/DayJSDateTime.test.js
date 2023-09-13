import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { DayJSDateTime } from "../DayJSDateTime";

describe("DayJSDateTime Component", () => {
	test("renders component to screen", () => {
		const renderedComponent = render(
			<DayJSDateTime utcDate='2023-06-26T21:45:00-06:00' format='ddd LT' />
		);

		const spanElement = renderedComponent.getByTestId("DayJSDateTime");
		expect(spanElement).toBeVisible();
	});

	test("renders properly formatted date", () => {
		const renderedComponent = render(
			<DayJSDateTime utcDate='2023-06-26T21:45:00-06:00' format='ddd LT' />
		);

		// const formattedDate = screen.getByText(/Mon 10:45 PM/i);
		const formattedDate = renderedComponent.getByText(/Mon 10:45 PM/i);
		expect(formattedDate).toBeInTheDocument();
	});

	test("renders 'Unknown' if utcDate is null", () => {
		const renderedComponent = render(
			<DayJSDateTime utcDate={null} format='ddd LT' />
		);

		const unknownText = renderedComponent.getByText(/unknown/i);
		expect(unknownText).toBeInTheDocument();
	});

	test("renders in default LT format if format is undefined", () => {
		const renderedComponent = render(
			<DayJSDateTime utcDate='2023-06-26T21:45:00-06:00' />
		);

		const defaultFormattedDate = renderedComponent.getByText("10:45 PM");
		expect(defaultFormattedDate).toBeInTheDocument();
	});
});
