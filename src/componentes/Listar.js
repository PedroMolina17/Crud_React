import React from "react";
import { Link } from "react-router-dom";

class Listar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pedro</td>
            <td>pedro.molinanoa@gmail.com</td>
            <td>
              <div className="btn-group" role="group" aria-label="">
                <Link type="button" className="btn btn-warning" to={"/Editar"}>
                  Editar
                </Link>
                <Link type="button" className="btn btn-danger">
                  Borrar
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Listar;
