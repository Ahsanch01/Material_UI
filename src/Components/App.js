import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
function App() {
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <Header value={value} setValue={setValue} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/about"
              component={() => (
                <div style={{ fontSize: "190px" }}>About us</div>
              )}
            />
            <Route
              exact
              path="/contact"
              component={() => (
                <div style={{ fontSize: "190px" }}>Contact us</div>
              )}
            />
          </Switch>
          <Footer value={value} setValue={setValue} />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
