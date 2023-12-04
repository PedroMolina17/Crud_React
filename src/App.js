import "./App.css";
import Listar from "./componentes/Listar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Crear from "./componentes/Crear";
import Editar from "./componentes/Editar";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
          <Link className="nav-item nav-link active" to={"/"}>
            Inicio
          </Link>
          <Link className="nav-item nav-link" to={"/crear"}>
            Crear Empleados
          </Link>
        </div>
      </nav>
      <div className="Container">
        <br></br>

        <Route exact path="/" component={Listar}></Route>
        <Route path="/crear" component={Crear}></Route>
        <Route path="/editar/:id" component={Editar}></Route>
      </div>
    </Router>
  );
}

export default App;
