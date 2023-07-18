import React, { Component } from "react";

class TableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Manto</th>
          <th>Quant.</th>
          <th>Subtotal</th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
