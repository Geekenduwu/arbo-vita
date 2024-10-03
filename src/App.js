
import NavBar from "./Components/NavBar";
import Inicio from"./Screens/Inicio";
import Proyectos from "./Screens/Proyectos";
import Dona from "./Screens/Dona";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      <Proyectos />
      <Dona />
      
    </div>
  );
}

export default App;
