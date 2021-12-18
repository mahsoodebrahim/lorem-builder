import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section-container">
      <h3>tired of the boring lorem ipsum?</h3>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, quis?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, quis?
        </p>
      </article>
    </section>
  );
}

export default App;
