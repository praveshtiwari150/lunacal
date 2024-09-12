import "./App.css";
import RightPanel from "./components/RightPanel";
import LeftPanel from "./components/LeftPanel";

function App() {
  return (
    <div className="bg-custom-gradient text-white-500 flex flex-col md:flex-row gap-12 min-h-screen p-4">
      <div className="flex-1  border border-[#96BEE7] my-4 md:my-8 mx-4  rounded-xl  bg-charcoal-500 shadow-lg transform scale-105 sm:min-h-64 md:min-h-64">
        <LeftPanel />
      </div>
      <div className="flex-1 my-4 md:my-8 mx-4  rounded-xl shadow-lg transform scale-105 ">
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
