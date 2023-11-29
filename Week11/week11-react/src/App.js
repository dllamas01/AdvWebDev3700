import './App.css';
import Navs from "./Navs";
import {Col, Row} from "react-bootstrap";
import Home5 from "./Home5";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";

// import Books from "./Books";

function App() {
    return (
        <Router>
            <div className="App">
                <Navs />
                <Row>
                    <Col sm={2}> Hey </Col>
                    <Col sm={8}>
                        <Switch>
                            <Route exact path ='/home'>
                                <Home5 />
                            </Route>
                            <Route path='/Create'>
                                <Create />
                            </Route>
                        </Switch>
                    </Col>
                    <Col sm={2}> Hey </Col>
                </Row>

            </div>
        </Router>
    );
}

export default App;