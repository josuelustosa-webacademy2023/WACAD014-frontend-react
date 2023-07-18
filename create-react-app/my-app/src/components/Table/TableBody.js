import React, { Component } from "react";

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
          <td>
            <input
              type="number"
              class="form-control border-3"
              id="numberItens"
              defaultValue={0}
              min={0}
              max={row.quant_estoque}
            />
          </td>
          <td>R$ {row.preco}</td>
        </tr>
      );
    });

    return <tbody>{rows}</tbody>;
  }
}

export default TableBody;
