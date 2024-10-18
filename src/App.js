
import NavBar from "./Components/NavBar";
import Videos from "./Screens/Videos";
import Inicio from"./Screens/Inicio";
import Proyectos from "./Screens/Proyectos";
import Dona from "./Screens/Dona";
import Participa from "./Screens/Participa";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      <Proyectos />
      <Videos />
      <Participa />
      <Dona />
      
    </div>
  );
}

export default App;
