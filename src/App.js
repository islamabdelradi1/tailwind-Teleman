import "./App.css";
import Fotter from "./Fotter";
import Nav from "./Nav";
import Sec2 from "./Sec2";
import Secthree from "./Secthree";
import Sectwo from "./Sectwo";
import Sec4 from "./Sec4";
import Sec5 from "./Sec5";

function App() {
  return (
    <div>
      {/* <h1 className=" text-4xl font-bold border border-orange-500 p-6 m-5 rounded-full bg-slate-300 border-[10px] shadow-xl shadow-orange-400/100">islam</h1> */}
      <Nav />
      <Sectwo />
      <Sec2 />
      <Secthree />
      <Sec4 />
      <Sec5 />
      <Fotter />
    </div>
  );
}

export default App;
