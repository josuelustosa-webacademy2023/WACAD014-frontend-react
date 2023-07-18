import React, { Component } from "react";

class TableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Manto</th>
          <th>Subtotal</th>
          <th>Ação</th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
