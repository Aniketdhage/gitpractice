import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ReactToastify = () => {
  const notify = () =>
    toast.warning("Danger", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 10,
    });

  return (
    <div>
      <h3>click on below alert button to show alert</h3>
      <button onClick={notify}>Alert</button>
      <ToastContainer />
    </div>
  );
};

export default ReactToastify;
