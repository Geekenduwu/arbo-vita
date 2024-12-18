
import NavBar from "./Components/NavBar";
import Videos from "./Screens/Videos";
import Inicio from"./Screens/Inicio";
import Proyectos from "./Screens/Proyectos";
import Dona from "./Screens/Dona";
import Participa from "./Screens/Participa";
import Footer from "./Screens/Footer";
import Galeria from "./Screens/Galeria";
import Testimonios from "./Screens/Testimonios";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      <Proyectos />
      <Videos />
      <Participa />
      <Galeria />
      <Dona />
      <Testimonios />
      <Footer />
      
  
      
    </div>
  );
}

export default App;
