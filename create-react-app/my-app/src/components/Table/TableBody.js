import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
class TableBody extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;

    const rows = characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.email}</td>
          <td>
            <button
              type="button"
              class="btn btn-danger text-white border-3"
              onClick={() => removeCharacter(index)}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
          </td>
        </tr>
      );
    });

    return <tbody>{rows}</tbody>;
  }
}

export default TableBody;
