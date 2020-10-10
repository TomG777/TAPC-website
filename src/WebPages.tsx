import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Pane, Tab, TabNavigation, majorScale, Heading } from 'evergreen-ui'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import InfoPage from './Pages/InfoPage';
import Scores from './Pages/Scores';
import Rules from './Pages/Rules';
import Participate from './Pages/Participate';
import Contact from './Pages/Contact';
import banner from './resources/banner.png';
import ia from './resources/ia.png';
import { colors, setColors } from './Constants';


export default function WebPages() {

    useEffect(() => {
        document.styleSheets[0].insertRule(`html { background-color: ${setColors.generalBackground} }`, 0);
    });


    return (
        <BrowserRouter>
            <div >
                <Pane height={majorScale(6)} width="100%" flex={1} alignItems="center" display="flex" justifyContent="center" >
                    <TabNavigation>
                        {['Home Page', 'Information', 'Rules', 'Participate', 'Contact', 'Scores'].map((tab) => (
                            <Tab color={setColors.title} key={tab} is="a" href={(tab !== 'Home Page') ? tab : "/"} id={tab}>
                                {tab}
                            </Tab>
                        ))}
                    </TabNavigation>
                </Pane>
                <Pane height={majorScale(6)} flex={1} alignItems="center" display="flex" justifyContent="center">
                    <Heading color={setColors.title} is="h1" size={900}>TAPC 2020 Programming Contest</Heading>
                </Pane>
                <Pane flex={1} alignItems="center" display="flex" justifyContent="center" >
                    <img src={banner} style={{ width: '450px', marginRight: '30px' }} />
                    <img src={ia} style={{ width: '450px', marginLeft: '30px' }} />
                </Pane >
            </div>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route exact path="/Information">
                    <InfoPage />
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

