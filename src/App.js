import "./App.css";
import GitComponent from "./GitFolderComp/GitComponent";
import ReactToastify from "./GitFolderComp/ReactToastify";
import Test2 from "./GitFolderComp/test2";

function App() {
  return (
    <div className="App">
      <h1>Hello ReactJS.</h1>
      <p>Practice Of Git Commands</p>
      <GitComponent />
      <ReactToastify />
      <Test2 />
    </div>
  );
}

export default App;
