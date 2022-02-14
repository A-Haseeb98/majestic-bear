import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../components/pages/home";
import Team from "../components/pages/team";
import Mint from "../components/pages/mint";    
import ScrollToTop from "./ScrollToTop";

function AppRouter() {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path={'/'} component={App} />
                <Route exact path={'/team'} component={Team} />
                {/* <Route exact path={'/mint'} component={Mint} /> */}
            </Switch>
        </Router>
    )
}

export default AppRouter;