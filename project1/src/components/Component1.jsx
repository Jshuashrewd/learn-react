import { useState } from "react";
import styles from "./Component1.module.css";

function Component1({ name, onToggle }) {
  const people = [
    { name: "Alice Johnson", job: "Software Engineer" },
    { name: "Brian Thompson", job: "Graphic Designer" },
    { name: "Carlos Rivera", job: "Data Scientist" },
    { name: "Dana Lee", job: "Marketing Specialist" },
  ];
  const filteredPeopleArray = people.filter(
    (person) => person.job !== "Marketing Specialist",
  );
  return (
    <>
      <div
        className={styles.titleDiv}
        onClick={() => {
          alert("Welcome");
        }}
      >
        <h1>Name</h1>
        <ul>
          {filteredPeopleArray.map((person, indx) => (
            <li key={indx}>
              {person.name}: {person.job}
            </li>
          ))}
        </ul>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
        >
          Click me
        </button>
      </div>
      <h2>{name}</h2>
      <Condition isLoggedIn={true} hasMessages={true} />
      <ToggleButton />
    </>
  );
}

function Condition({ isLoggedIn, hasMessages }) {
  // if (isLoggedIn) {
  //   return <h1>Welcome back</h1>
  // } else {
  //   return <h1>Please sign in</h1>
  // }
  return (
    <>
      <h1>{isLoggedIn ? "Welcome Back" : "Please Log in"}</h1>
      <p>{hasMessages && "Welcome Alex"}</p>
    </>
  );
}

function ToggleButton() {
  const [isActive, setIsActive] = useState(false);
  // Step 1: Create a state variable to track the button's active state. (isActive, setIsActive). React.useState
  // Step 2: Function to toggle the button's active state
  return (
    <>
      <button
        className="btn"
        // Step 3: Add a click event handler to toggle the button's active state
        onClick={() => {
          setIsActive(!isActive);
        }}
        // Step 4: Use the state variable to conditionally render the button's text and the div below it
      >
        {isActive ? "ON" : "OFF"} 'Practice'
      </button>
      <div>
        It may get difficult but with time you will always get better. This note
        is filled with gems - dig dont scratch the surface - find and own them,
        read it and contribute to it.
      </div>
    </>
  );
}

export default Component1;
