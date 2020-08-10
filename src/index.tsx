import Root from "components/Root";
import { configureIcons } from "lib/configureIcons";
import * as React from "react";
import { render } from "react-dom";
import "./index.css";

configureIcons();

render(<Root />, document.getElementById("root"));
