import React from "react";

export default function CopyRight() {
  return (
    <div className="copy-right">
      <div className="text-center">
        <span>
          © {new Date().getFullYear()} All Rights Reserved by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://vinitk.dev"
          >
            Vinit Kumar
          </a>
          .
        </span>
      </div>
    </div>
  );
}
