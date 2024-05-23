import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  const notify = () => {
    switch (true) {
      case number < 6:
        toast.error(
          `You are running at low figures - The number is now ${number}`
        );
        break;
      case number < 11:
        toast.warning(
          `You are still low but doing a bit better - The number is now ${number}`
        );
        break;
      case number < 16:
        toast.info(`You are now doing okay - The number is now ${number}`);
        break;
      case number > 20:
        toast.success(
          `You are doing excellent now - The number is now ${number}`
        );
        break;
      default:
        toast.success("All is good Superman!");
        break;
    }
  };

  const resetNumber = () => {
    setNumber(0);
  };

  return (
    <div>
      <ToastContainer position="bottom-right" />
      <div className="middle">
        <button
          className="b1"
          onClick={() => setNumber((prevNumber) => prevNumber + 1)}
        >
          Add to Number
        </button>
        <button className="b2" onClick={notify}>
          Test Number
        </button>
        <button className="b3" onClick={resetNumber}>
          Reset the Number
        </button>
        <button className="b4">{number}</button>
      </div>
    </div>
  );
}

export default App;
