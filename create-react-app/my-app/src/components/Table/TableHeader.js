import React, { Component } from "react";

class TableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Nome</th>
          <th>e-mail</th>
          <th>Ação</th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
