import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Footer } from "./Footer";

describe("Footer Component", () => {
	test("renders component to screen", () => {
		const renderedComponent = render(<Footer />);

		const footerElement = renderedComponent.getByTestId("Footer");
		expect(footerElement).toBeVisible();
	});
});
