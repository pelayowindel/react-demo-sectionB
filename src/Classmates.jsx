import { useState } from "react";

export const Classmates = () => {
  const [classMates, setClassMates] = useState(["Alice", "Bob", "Charlie"]);
  const [newClassMate, setNewClassMate] = useState("");

  const newClassmateHandler = (event) => {
    setNewClassMate(event.target.value);
  }

  const addClassmateHandler = () => {
    if (newClassMate.trim() === "") return;
    setClassMates([newClassMate, ...classMates ]);
    setNewClassMate("");
  }

  return (
    <div>
      <h4>Classmates</h4>
      <input 
        type="text" 
        placeholder="Add a classmate" 
        value={newClassMate} 
        onChange={newClassmateHandler} />

      <button onClick={addClassmateHandler}>Add</button>
      <ul>
        {
          classMates.map((mate, index) => (
            <li key={index}>{mate}</li>
          ))
        }
      </ul>
    </div>
  )
}