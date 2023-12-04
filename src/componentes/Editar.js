import React from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

class Editar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datosCargados: false,
      empleado: [],
    };
  }

  cambioValor = (e) => {
    const state = this.state.empleado;
    state[e.target.name] = e.target.value;
    this.setState({ empleado: state });
  };

  enviarDatos = (e) => {
    e.preventDefault();
    const { id, nombre, correo } = this.state.empleado;
    var datosEnviar = { id: id, nombre: nombre, correo: correo };
    fetch(api + "?actualizar=1", {
      method: "POST",
      body: JSON.stringify(datosEnviar),
    })
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        //**FALTA ENVIAR AL INICIO UNA VEZ REGISTRADO */
        this.props.history.push("/");
      })

      .catch(console.log);
  };

  componentDidMount() {
    fetch(api + "?consultar=" + this.props.match.params.id)
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        this.setState({ datosCargados: true, empleado: datosRespuesta[0] });
      })
      .catch(console.log);
  }

  render() {
    const { datosCargados, empleado } = this.state;
    if (!datosCargados) {
      return <div>Cargando...</div>;
    } else {
      return (
        <div className="card">
          <div className="card-header">Editar Empleados</div>
          <div className="card-body">
            <form onSubmit={this.enviarDatos}>
              <div className="form-group">
                <label htmlFor="">Clave</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.cambioValor}
                  value={empleado.id}
                  readOnly
                  name="id"
                  id="id"
                  aria-describedby="helpId"
                  placeholder=""
                />
                <small id="helpId" className="form-text text-muted">
                  Clave
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="">Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  onChange={this.cambioValor}
                  value={empleado.nombre}
                  id="nombre"
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
                <small id="helpId" className="text-muted">
                  Escribe nombre de empleados
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="">Correo:</label>
                <input
                  type="email"
                  name="correo"
                  onChange={this.cambioValor}
                  value={empleado.correo}
                  id="correo"
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                />
                <small id="helpId" className="text-muted">
                  Escribe el correo
                </small>
              </div>

              <div className="btn-group" role="group" aria-label="">
                <button type="submit" className="btn btn-success">
                  Actualizar
                </button>
                <Link to={"/"} className="btn btn-danger">
                  Cancelar
                </Link>
              </div>
            </form>

            <p className="card-text"></p>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      );
    }
  }
}

export default Editar;
