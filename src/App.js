import "./App.css";
import GitComponent from "./GitFolderComp/GitComponent";
import ReactToastify from "./GitFolderComp/ReactToastify";

function App() {
  return (
    <div className="App">
      <h1>Hello ReactJS.</h1>
      <p>Practice Of Git Commands</p>
      <GitComponent />
      <ReactToastify />
    </div>
  );
}

export default App;
