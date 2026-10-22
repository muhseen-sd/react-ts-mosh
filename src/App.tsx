import Button from "./components/Button";

function App() {
  return (
    <div>
    <Button onclick={() => console.log("Clicked")} children="Register" />
    </div>
  );
}
export default App;
