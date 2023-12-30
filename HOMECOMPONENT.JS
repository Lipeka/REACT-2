// HomeComponent.js
import React, { useState, useEffect } from "react";
import ResponsiveAppBar from "./Homepage";
import CardGrid from "./Home";
import Footer from "./Footer";

const HomeComponent = () => {
  // Add state and useEffect logic if needed

  return (
    <div>
      {/* Your responsive app bar */}
      <ResponsiveAppBar />

      {/* Your main content, for example, a card grid */}
      <CardGrid />

      {/* Your footer */}
      <Footer />
    </div>
  );
};

export default HomeComponent;
