import React from "react";

export default function Horoscope(props) {
  return (
    <div className="TodayHoroscope">
      <ul className="Predictions ">
        <li className="Dates">Dates:{props.dates}</li>
        <li className="currentDate">Current date: {props.currentDate}</li>
        <li className="description"> description: {props.description}</li>
        <li className="compatibility"> compatibility: {props.compatibility}</li>
        <li className="mood">mood: {props.mood}</li>
        <li className="color"> color: {props.color} </li>
        <li className="lucky number">luckyNumber:{props.number}</li>
        <li className="lucky time"> luckyTime: {props.time}</li>
      </ul>
    </div>
  );
}
