import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Page1} from "./Page1";
import {Page2} from "./Page2";
import {Home} from "./Home";
import {Page1DetailA} from "./page1DetailA";
import {Page2DetailB} from "./Page2DetailB";

export default function Web() {
    return (
        <BrowserRouter>
            <div>
                <Link to="/">Home</Link>
                <br/>
                <Link to="/page1">Page1</Link>
                <br/>
                <Link to="/page2">Page2</Link>
            </div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/page1"
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
        </BrowserRouter>
    )
}