"use client";
import React, { useState, useEffect } from "react";

export default function Header() {

  const addlightBg = () => {
    if (
      document.body.style.backgroundImage != "url(/assets/img/bg/page-bg-1.jpg)"
    ) {
      document.body.style.backgroundImage = "url(/assets/img/bg/page-bg-1.jpg)";

    }
  };


  useEffect(() => {
      addlightBg();
  }, []);

  return (
    <div className="bostami-header-area mb-30 ">
      <div className="container">
        <div className="bostami-header-wrap">

        </div>

       
      </div>
    </div>
  );
}
