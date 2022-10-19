import React from "react";
import AddsSlider from "./AddsSlider";
import "./adds.css";
import { CountDownTimer } from "./AddsCountDown";

export default function Adds() {
  return (
    <div className="adds container">
      <AddsSlider />
      <CountDownTimer hours={50} minutes={57} seconds={70} />
    </div>
  );
}
