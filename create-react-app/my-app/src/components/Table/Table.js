import React, { Component } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;

    return (
      <div className="py-4">
        <table className="container text-center">
          <TableHeader />
          <TableBody
            characterData={characterData}
            removeCharacter={removeCharacter}
          />
        </table>
      </div>
    );
  }
}

export default Table;
