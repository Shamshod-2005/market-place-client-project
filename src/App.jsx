import { ToastContainer } from "react-toastify";
import "./App.scss";
import "./index.scss";
import Router from "./router";

function App() {
  return (
    <div className="container">
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
