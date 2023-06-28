import { render, screen } from "@testing-library/react";
import { DayJSDateTime } from "./DayJSDateTime";

/**
 * SCENARIOS
 * 1. displays component
 * 2. IF utcDate = null, displays "Unknown"
 * 3. IF format = null, auto-formats using "LT" (h:mm A)
 * 4. IF both args are passed, displays properly formatted date
 */

test("renders component to screen", () => {
	const component = render(
		<DayJSDateTime utcDate='2023-06-26T21:45:00-06:00' format='' />
	);
});

test("renders properly formatted date", () => {});

test("renders 'Unknown' if utcDate is null", () => {});

test("renders in default LT format if format is null", () => {});
