import React from "react";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}>
    <div id={props.load ? "preloader-image" : "preloader-none"}></div>
  </div>;
}

export default Pre;
