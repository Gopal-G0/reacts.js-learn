import TodoComponent from './components/TodoComponent';
import { useState, useRef } from 'react';
export default function App() {
  
  // const [todo, setTodo] = useState(''); --> Using useState() causes re-renders on every keystroke onChange..
  const [inputArray, setInputArray] = useState([]);
  const inputRef = useRef(null);
  
  // const handleChange = (event) => {
  //   setTodo(event.target.value);
  // }
  
  const addToArray = () => {
    const value = inputRef.current.value;
    setInputArray(prevArray => [...prevArray, value]);
    inputRef.current.value = '';
  }
  return (
    <div
      style={{
        display: "flex",
        border: "2px solid grey",
        height: "90vh",
        margin: 15,
        borderRadius: 15,
        padding:20
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
          width: "65vw",
          height: "90vh",
          border: "1px solid grey",
        }}
      >
        <input
          type="text"
          placeholder="enter your task to add"
          ref={inputRef}
          required={true}
          style={{
            width: 450,
            height: 50,
            borderRadius: 9,
            fontSize: 16,
            fontWeight: 550,
            paddingLeft: 15
          }}
        />
        
        
        <button
          style={{
            width: 120,
            height: 45,
            borderRadius: 8,
            border: "none",
            fontSize: 18,
            cursor: "pointer",
            fontWeight: 550,
            backgroundColor: "#AF37FF",
            color: "#000000",
          }}
          onClick={addToArray}
        >
          Add Task
        </button>
      </div>
      <div
        style={{
          width: "65vw",
          height: "90vh",
          border: "1px solid grey",
        }}
      >
        Hii
        <ul>
          {inputArray.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}