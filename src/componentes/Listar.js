import React from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

class Listar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datosCargados: false, empleados: [] };
  }
  state = {};

  cargarDatos() {
    fetch(api)
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        this.setState({ datosCargados: true, empleados: datosRespuesta });
      })
      .catch(console.log);
  }
  borrarDatos = (id) => {
    fetch(api + "?borrar=" + id)
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        this.cargarDatos();
      })
      .catch(console.log);
  };

  // Se ejecutara primero
  componentDidMount() {
    this.cargarDatos();
  }

  render() {
    const { datosCargados, empleados } = this.state;
    if (!datosCargados) {
      return <div>Cargando...</div>;
    } else {
      return (
        <div className="card">
          <div className="card-header">
            <Link type="button" className="btn btn-success" to={"/crear"}>
              Agregar nuevo empleado
            </Link>
          </div>
          <div className="card-body">
            <h4>Lista de Empleados</h4>
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
                {empleados.map((empleado) => (
                  <tr key={empleado.id}>
                    <td>{empleado.id}</td>
                    <td>{empleado.nombre}</td>
                    <td>{empleado.correo}</td>
                    <td>
                      <div className="btn-group" role="group" aria-label="">
                        <Link
                          type="button"
                          className="btn btn-warning"
                          to={"/editar/" + empleado.id}
                        >
                          Editar
                        </Link>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => this.borrarDatos(empleado.id)}
                        >
                          {" "}
                          Borrar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      );
    }
  }
}

export default Listar;
