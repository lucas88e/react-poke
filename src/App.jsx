import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Indice from "./pages/Indice";
import PokeBusqueda from "./Components/PokeBusqueda";

function App() {
 return  <Router>
<Routes>
<Route path="/" element={<Indice/>}/>
<Route path="/prueba" element={<PokeBusqueda/>}/>
</Routes>

  </Router>


}

export default App;


