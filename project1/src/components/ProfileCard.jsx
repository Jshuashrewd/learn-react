import { useState } from "react";

export default function ProfileCard({ name, bio, role }) {
      const [count, setCount] = useState(0);

  return (
    <>
      <div style={styles.card}>
        <div style={styles.name}>{name}</div>
        <div style={styles.bio}>{bio}</div>
        <div>{role}</div>
      </div>
      <button
        onClick={() => {
          alert("You clicked the button!");
        }}
      >
        Click me
      </button>
      <button onClick={()=> setCount(count+1)}>count is: {count}</button>
    </>
  );
}

// const click = () => {
//   alert("You clicked the button!");
// };

const styles = {
  card: {
    border: "2px solid black",
    width: "300px",
    height: "300px",
    backgroundColor: "gray",
    padding: "20px",
  },

  name: {
    fontSize: "15px",
    fontWeight: "bold",
  },

  bio: {
    fontSize: "12px",
    color: "gray",
  },
};
