import React, { Component } from "react";
class TableBody extends Component {
  render() {
    const { characterData } = this.props;

    const rows = characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.email}</td>
        </tr>
      );
    });
    
    return <tbody>{rows}</tbody>;
  }
}

export default TableBody;
