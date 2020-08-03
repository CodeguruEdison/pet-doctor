import * as React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js/dist/umd/popper.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery";

import App from "./components/App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
