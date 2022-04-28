import "./App.css";
import GitComponent from "./GitFolderComp/GitComponent";

import Test2 from "./GitFolderComp/test2";

import ReactToastify from "./GitFolderComp/ReactToastify";


function App() {
  return (
    <div className="App">
      <h1>Hello ReactJS.</h1>
      <p>Practice Of Git Commands</p>
      <GitComponent />

      <Test2 />

      <ReactToastify />

    </div>
  );
}

export default App;
