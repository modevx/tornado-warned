import { render, screen } from "@testing-library/react";
import { Header } from "../../components/Header";

describe("Header", () => {
	it("displays <Header/>", () => {
		render(<Header />);

		expect(screen.getByTestId("header")).toHaveTextContent(/Tornado Action/i);
	});

	it("displays Tornado Action logo", () => {});

	it("displays Tornado <Clock/>", () => {});
});
