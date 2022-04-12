import { Clock } from "../PageWrapper";
// import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header
      data-testid="header"
      className="text-center p-4 sm:flex sm:justify-between sm:items-center"
    >
      <div className="mb-4 sm:mb-0">
        <div className="text-3xl font-bold">
          TORNADO <span className="text-red-500">ACTION</span>
        </div>
        {/* <Navbar /> */}
      </div>
      <Clock />
    </header>
  );
};
