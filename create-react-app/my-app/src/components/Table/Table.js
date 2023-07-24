import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ dadosTabela, removerItemDaTabela }) => {
  return (
    <div className="py-4">
      <table className="container text-center">
        <TableHeader />
        <TableBody
          dadosTabela={dadosTabela}
          removerItem={removerItemDaTabela}
        />
      </table>
    </div>
  );
};

export default Table;
