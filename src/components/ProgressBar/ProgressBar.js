import React from "react";
import "./ProgressBar.css";

export default function ProgressBar(props) {
  const progress = props.progress;
  const percent = progress + "%";
  return (
    <div id="progressbar-component">
      <div className="complete" style={{ width: `${percent}` }}></div>
    </div>
  );
}
