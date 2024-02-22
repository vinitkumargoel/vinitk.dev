import AboutOne from "@/components/homes/about/AboutOne";
import Header from "@/components/homes/headers/Header";
import React from "react";
export const metadata = {
  title: "About || Bostami - Professional portfolio NextJS Template",
  description:
    "Discover Botami,the most impressive portfolio template for work showcase, blog",
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
