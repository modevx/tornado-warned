import { Footer as DUIFooter } from "react-daisyui";
import { Link } from "./Link";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <DUIFooter className="p-10 bg-neutral text-neutral-content">
      <div>
        <DUIFooter.Title>National Weather Service</DUIFooter.Title>
        <Link href="https://www.weather.gov/gis/AWIPSShapefiles">
          <a>AWIPS Basemaps</a>
        </Link>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <DUIFooter.Title>Storm Prediction Center</DUIFooter.Title>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <DUIFooter.Title>NOAA</DUIFooter.Title>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <p className="text-center text-xs mb-3">
        &copy; {year} MODEVX, LLC. &nbsp; All Rights Reserved.
      </p>
    </DUIFooter>
  );
};
