import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
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
