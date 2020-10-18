import React, { useEffect } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Scores from './Pages/Scores';
import Rules from './Pages/Rules';
import Participate from './Pages/Participate';
import Contact from './Pages/Contact';

import { colors, setColors } from './Constants';
import Banner from './Components/Banner';


export default function WebPages() {

    // Hacky way to set the background color
    useEffect(() => {
        document.styleSheets[0].insertRule(`html { background-color: ${setColors.generalBackground} }`, 0);
    });


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

