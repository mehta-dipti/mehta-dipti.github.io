import React from "react";
import "../index.scss";
import { Navbar } from "./Navbar";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Dashboard = () => {
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className="container">
      <Navbar />
      <div className="hero-container">
        <div className="name">I'm Dipti Mehta</div>
        <h1>Frontend Developer </h1>
        <button className="primary">Download CV</button>
      </div>
    </div>
  );
};

export default Dashboard;
