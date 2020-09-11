import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor() {
    super();
    this.titulo = "";
  }

  handleMudancaTitulo(evento) {
    this.titulo = evento.target.value;
    console.log(evento.target.value);
  }

  render() {
    return (
      <form className="form-cadastro">
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo.bind(this)}
        />

        <textarea
          className="form-cadastro_input"
          placeholder="Escreva sua nota..."
          rows={15}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Inserir Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
