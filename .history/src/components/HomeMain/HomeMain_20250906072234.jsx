import React from "react";
import Footer from "./common/footer/footer"

function HomeMain({ lang }) {
  return (
    <div>
      <h1>Welcome to HomeMain Page</h1>
      <p>Current language: {lang}</p>
    </div>
  );
}

export default HomeMain;   // ✅ must be here
