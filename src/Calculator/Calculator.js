import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [number, setNumber] = useState(0);
  return (
    <div className="container">
      <div className="result">{number}</div>
      <div className="btns_card">
        <button
          onClick={() => {
            setNumber(0);
          }}
        >
          C
        </button>
        <button onClick={() => {}}>%</button>
        <button onClick={() => {}}>/</button>
        <button onClick={() => {}}>x</button>
        <button
          onClick={() => {
            setNumber(7);
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            setNumber(8);
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            setNumber(9);
          }}
        >
          9
        </button>
        <button onClick={() => {}}>-</button>
        <button
          onClick={() => {
            setNumber(4);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setNumber(5);
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            setNumber(6);
          }}
        >
          6
        </button>
        <button onClick={() => {}} className="plus">
          +
        </button>
        <button onClick={() => {}}>=</button>
        <button
          onClick={() => {
            setNumber(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setNumber(2);
          }}
        >
          2
        </button>
        <button onClick={() => {}} className="zero">
          0
        </button>
        <button
          onClick={() => {
            setNumber(3);
          }}
        >
          3
        </button>
        <button onClick={() => {}}>.</button>
      </div>
    </div>
  );
}
