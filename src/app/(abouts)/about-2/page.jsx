import AboutOne from "@/components/homes/about/AboutOne";
import Header from "@/components/homes/headers/Header";
import React from "react";
export const metadata = {
  title: "Vinit Kumar || About Me",
  description:"Vinit Kumar Full Stack Developer",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <Header />
        <div className="bostami-page-area z-index-3">
          <div className="container">
            <AboutOne />
          </div>
        </div>
      </div>
    </>
  );
}
