import React from "react";
import loading from "../load-unscreen.gif";
export default function Spinner() {
  return (
    <div class="text-center">
      <div class="d-flex justify-content-center" role="status">
        <img style={{ width: "290px" }} src={loading} alt="loading..." />
      </div>
    </div>
  );
}
