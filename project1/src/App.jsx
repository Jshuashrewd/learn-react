import Component1 from "./components/Component1";
import ProfileCard from "./components/ProfileCard";

function App() {
  const handleToggle = () => {
    console.log('Toggle button clicked!');
  };
  return (
    <>
    <Component1 onToggle={handleToggle} />
      <ProfileCard
        name="Jayce"
        bio="Frontend Dev"
        role="Building and bridging the digital world"
      />
    </>
  );
}

export default App;
