import React from "react";
import "./App.css"; // Make sure the CSS file exists and is correctly referenced
import Navbar from "./component/navbar"; // Verify the path to Navbar component
import Top from "./component/top"; // Verify the path to Top component
import Card from "./component/card"; // Verify the path to Card component
import Data from "./data"; // Verify the path to your data file

export default function App() {
  // Map over the Data array to create Card components
  const cards = Data.map((item) => (
    <Card
      key={item.id} // Add a unique key prop (e.g., item.id) for each Card
      item={item}
    />
  ));

  return (
    <div className="font-poppins">
      <Navbar /> {/* Render the Navbar component */}
      <Top /> {/* Render the Top component */}
      <section className="flex gap-5 overflow-x-auto pxy-5 flex-nowrap">
        {cards} {/* Render the mapped Card components */}
      </section>
    </div>
  );
}
