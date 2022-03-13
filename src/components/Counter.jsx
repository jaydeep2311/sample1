import React from "react";

export default function Counter(props) {
  const [count, setcount] = React.useState(props.Count);
  function handleadd(val) {
    setcount(count + val);
    console.log(count);
  }
  function dblclick() {
    setcount(count * 2);
  }
  return (
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
      <button type="button" onClick={() => handleadd(1)}>
        Add
      </button>
      <button type="button" onClick={() => handleadd(-1)}>
        Sub
      </button>
      <button type="button" onClick={dblclick}>
        Double
      </button>
    </div>
  );
}
