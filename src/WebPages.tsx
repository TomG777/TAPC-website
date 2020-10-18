import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Scores from './Pages/Scores';
import Rules from './Pages/Rules';
import Participate from './Pages/Participate';
import Contact from './Pages/Contact';



export default function WebPages() {


    return (
        <BrowserRouter>

                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route exact path="/rules">
                        <Rules />
                    </Route>
                    <Route exact path="/participate">
                        <Participate />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/scores">
                        <Scores />
                    </Route>
                </Switch>
        </BrowserRouter>

    );
}

