import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);
  function handleClick(){
    setValue('X!');
  }
  return <button className="square" onClick={handleClick}>{value}</button>

}

export default function Board() {
  return (
    <>
      <div className="board-row">
        {/* <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button> */}
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        {/* <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button> */}
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        {/* <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button> */}
        <Square />    
        <Square />    
        <Square />    

        </div>
    </>
  );
}
