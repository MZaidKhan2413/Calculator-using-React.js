import Screen from "./Components/Screen";
import ButtonBox from "./Components/ButtonBox";
import CalcProvider from "./Context/CalcContext";

function App() {
  return (
    <CalcProvider>
      <div className="wrapper">
        <Screen />
        <ButtonBox />
      </div>
    </CalcProvider>
  )
}

export default App
