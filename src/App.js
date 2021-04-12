import './App.css';
import Button from "./Button/Button"

function App() {
  return (
    <div className="App">
      <Button text="текст" />
      <Button text="Другой текст" />
      <Button text={1} />
      <Button text={true} />
    </div>
  );
}

export default App;
