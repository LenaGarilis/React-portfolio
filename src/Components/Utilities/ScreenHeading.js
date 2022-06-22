import React from "react";
import "./ScreenHeading.css";

export default function ScreenHeading(props) {
  return (
    <div className="heading-container">
      <div className="section-heading">
        <span>{props.title}</span>
      </div>

      {props.subHeading ? (
        <div className="section-sub-heading">
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className="heading-seperator">
        <div className="separator-line">
          <div className="separator-point">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
