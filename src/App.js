import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import RandomList from "./RandomList";
import SentenceList from "./SentenceList";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/numbers">Numbers</Link>
                        </li>
                        <li>
                            <Link to="/sentences">Sentences</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/numbers">
                        <RandomList />
                    </Route>
                    <Route path="/sentences">
                        <SentenceList />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}