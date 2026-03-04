import { useState } from "react";

export const CounterComponent = () => {
  // This is a state variable, it will trigger a re-render when updated
  // State are immutable, so we need to use the setCounterState function to update it
  const [counterState, setCounterState] = useState(0);
  const [name, setName] = useState("John Doe");
  const [address, setAddress] = useState("");

  let handleIncrement = () => {
    setCounterState(counterState + 1);
  }

  const handleNameChange = (event) =>{
    setName(event.target.value);
  }

  return (
    <>
      <div>
        <p>Counter: {counterState}</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>

      <div style={{ 
        border: "1px solid black", 
        margin: "20px", 
        padding: "10px", 
        backgroundColor: name.length === 0 ? "red" : "white"
        }}>
        <h4>Enter your name</h4>
        
        <p>Name : {name}</p>
        <input type="text" value={name} onChange={handleNameChange} />
        <button>Submit</button>
      
      </div>

      <div style={{ 
        border: "1px solid black", 
        margin: "20px", 
        padding: "10px", 
        backgroundColor: address.length === 0 ? "red" : "white"
        }}>
        <h4>Enter your Address</h4>
        
        <p>Address : {address}</p>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <button>Submit</button>
      
      </div>
    </>
  );
};

