import React, { Component } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class Table extends Component {
  render() {
    const { dadosTabela, removeLinha } = this.props;

    return (
      <div className="py-4">
        <table className="container text-center">
          <TableHeader />
          <TableBody dadosTabela={dadosTabela} removeLinha={removeLinha} />
        </table>
      </div>
    );
  }
}

export default Table;
