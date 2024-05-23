import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  const notify = () => {
    switch (true) {
      case number < 5:
        toast.error(
          `You are running at low figures - The number is now ${number}`
        );
        break;
      case number < 10:
        toast.warning(
          `You are still low but doing a bit better - The number is now ${number}`
        );
        break;
      case number < 15:
        toast.info(`You are now doing okay - The number is now ${number}`);
        break;
      case number > 20:
        toast.success(
          `Congratulations! - You are now in the TOP NUMBERS! - The number is now ${number}`
        );
        break;
      default:
        toast.success(
          `You are above average now - The number is now ${number}`
        );
        break;
    }
  };

  const resetNumber = () => {
    setNumber(0);
  };

  return (
    <div>
      <ToastContainer position="bottom-right" className="testContainer" />
      <div className="middle">
        <button
          className="b1"
          onClick={() => setNumber((prevNumber) => prevNumber + 1)}
        >
          Add 1 to Number
        </button>
        <button
          className="b2"
          onClick={() => setNumber((prevNumber) => prevNumber - 1)}
        >
          Subtract 1 from Number
        </button>
        <button className="b3" onClick={notify}>
          Test Number
        </button>
        <button className="b4" onClick={resetNumber}>
          Reset the Number
        </button>
        <button className="b5">{number}</button>
      </div>
    </div>
  );
}

export default App;
