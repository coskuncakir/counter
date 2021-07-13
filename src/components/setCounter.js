import React from "react";
import { useDispatch } from "react-redux";
import { set } from "../actions";

export default function SetCounter() {
  const [count, setCount] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (count) {
      dispatch(set(count));
      setCount("");
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Set Count
          <input
            type="text"
            onChange={(e) => setCount(e.target.value)}
            value={count}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
