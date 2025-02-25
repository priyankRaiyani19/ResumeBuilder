import "./App.css";
import RouteProvider from"./routes/RouteProvider"

function App() {
  return (
      <div className={`select-none`}>

        <RouteProvider/>

      </div>

  );
}

export default App;