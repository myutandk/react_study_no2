import {Route, Switch} from "react-router-dom";
import {Home} from "../Home";
import {Page1} from "../Page1";
import {Page1DetailA} from "../page1DetailA";
import {Page2DetailB} from "../Page2DetailB";
import {Page2} from "../Page2";

export const Router = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route
                path="/page1"
                render={({match: {url}}) => (
                    <Switch>
                        <Route exact path={url}>
                            <Page1/>
                        </Route>
                        <Route path={`${url}/detailA`}>
                            <Page1DetailA/>
                        </Route>
                        <Route path={`${url}/detailB`}>
                            <Page2DetailB/>
                        </Route>
                    </Switch>
                )}/>
            <Route path="/page2">
                <Page2/>
            </Route>
        </Switch>
    )
}