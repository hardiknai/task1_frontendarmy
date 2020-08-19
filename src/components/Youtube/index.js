import React from "react";
import  "./index.css";

export default function Youtube() {
  return (
      <div  class="demo bottomright">
        <iframe
          title="Title"
          class="ytp"
          src="https://www.youtube.com/embed/QjHNHonuCQU"
          frameborder="0"
          allowfullscreen
        ></iframe>
    </div>
  );
}
