import Footer from "layouts/Footer/Footer";
import Collection from "layouts/HomePage/Collection/Collection";
import Hero from "layouts/HomePage/Hero/Hero";
import JoinCommunity from "layouts/HomePage/JoinCommunity/JoinCommunity";
import Roadmap from "layouts/HomePage/Roadmap/Roadmap";
import Story from "layouts/HomePage/Story/Story";
import Team from "layouts/HomePage/Team/Team";
import Navbar from "layouts/Navbar/Navbar";
import React from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="mb-100px">
        <Hero />
      </div>
      <div className="mb-100px">
        <Collection />
      </div>
      <div className="mb-100px">
        <Story />
      </div>
      <div className="mb-100px">
        <Roadmap />
      </div>
      <div className="mb-100px">
        <Team />
      </div>
      <div className="bg-blue py-100px">
        <div className="mb-150px">
          <JoinCommunity />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
