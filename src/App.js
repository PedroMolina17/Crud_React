import "./App.css";
import Listar from "./componentes/Listar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Crear from "./componentes/Crear";
import Editar from "./componentes/Editar";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
          <Link className="nav-item nav-link active" to={"/"}>
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-item nav-link" to={"/Crear"}>
            Crear Empleados
          </Link>
          <Link className="nav-item nav-link" to={"/Editar"}>
            Editar Empleados
          </Link>
        </div>
      </nav>
      <div className="Container">
        <br></br>
        <Routes>
          <Route exact path="/" element={<Listar></Listar>}></Route>
          <Route exact path="/Crear" element={<Crear></Crear>}></Route>
          <Route exact path="/Editar" element={<Editar></Editar>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
