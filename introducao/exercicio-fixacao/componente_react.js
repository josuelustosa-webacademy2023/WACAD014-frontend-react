"use strict";

const e = React.createElement;

const dados = {
  nome_completo: "Josué Lustosa",
  frase: "Minha primeira página React",
};

class ComponentReact extends React.Component {
  render() {
    return e(
      "p",
      {},
      `${dados.nome_completo}`,
      React.createElement("br"),
      `${dados.frase}`
    );
  }
}

const domContainer = document.querySelector("#componente_react");
const root = ReactDOM.createRoot(domContainer);
root.render(e(ComponentReact));
