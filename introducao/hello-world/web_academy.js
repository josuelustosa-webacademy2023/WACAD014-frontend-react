"use strict";

const e = React.createElement;

class WebAcademy extends React.Component {
  render() {
    return "Helo World Web Academy";
  }
}

const domContainer = document.querySelector("#webacademy_button_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(WebAcademy));
