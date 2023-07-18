import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class TableBody extends Component {
  render() {
    const { dadosTabela, removeLinha } = this.props;

    const rows = dadosTabela.map((row, index) => {
      return (
        <tr key={index}>
          <td className="text-start py-3">
            <img
              src={row.imagem}
              alt={row.nome}
              title={row.nome}
              width={75}
              height={65}
              style={{ borderRadius: 2, marginRight: 12 }}
            />
            {row.nome}
          </td>
          <td>R$ {row.preco}</td>
          <td>
            <button
              type="button"
              class="btn btn-danger text-white border-3"
              onClick={() => removeLinha(index)}
            >
              <FontAwesomeIcon icon={faTrash} /> Remover
            </button>
          </td>
        </tr>
      );
    });

    return <tbody>{rows}</tbody>;
  }
}

export default TableBody;
