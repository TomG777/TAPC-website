import React from 'react';
import { Button, Pane, Paragraph, Tab, TabNavigation } from 'evergreen-ui'
import InfoCard, { CardText } from '../Components/InfoCard'
import Page from '../Components/Page';

export default function MainPage() {
    return (
        <Page>
            <InfoCard title="Participation">
                <CardText>
                    In order to participate in the Twents Algorithm Programming Contest (TAPC),
                    you have to enroll with a team of two to three people. All members of a team have to be
                    enrolled in the same educational institute if the team wants to participate as an official team.
                    It is possible to participate as an unofficial team, for example, university staff could participate in an unofficial team.
                    The competition involves solving six to ten exercises. The goal of the competition
                    is to solve them as quickly and efficiently as possible.
                </CardText>
                <CardText>
                    During the match lunch will be arranged, and after the match there will be a drink. The winner will be announced at the drink.
                The winning official team (and sometimes more teams) can join the <a target="_blank" href="http://bapc.eu">Benelux Algorithm Programming Contest</a>,
                representing Twente.
                Participation in the TAPC is a hundred percent free (free as in free beer). Every year both the competition and the drink are very
                'gezellig' (which is an untranslatable Dutch word).
                </CardText>
            </InfoCard>
            <InfoCard title="Location">
                <CardText>
                    The competition will take place in the Westzaal in the zilverling. The schedule is available in the programme found at the bottom of this page.
                </CardText>
                <CardText>
                    We will gather in the Educafé.
                </CardText>
            </InfoCard>
        </Page>
    );
}