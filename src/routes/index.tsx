import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LayoutBase from "../layout/base";
import WeekDaSorte from "../pages/weekDaSorte";


export default function Routes() {
  return (
    <Router>
      <LayoutBase>
        <Switch>
          <Route path="/" exact component={WeekDaSorte} />

        </Switch>
      </LayoutBase>
    </Router>
  );
}