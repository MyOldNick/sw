import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Main from "./components/Main";
import Preview from "./components/Preview";
import HeroPage from "./components/HeroPage";
//styles
import "./styles/app.css";
import "antd/dist/antd.css";

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Preview} />
        <Route path="/main" component={Main} />
        <Route path="/info/:id">
          <HeroPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
