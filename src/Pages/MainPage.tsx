import { Table } from 'evergreen-ui';
import React from 'react';
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
                    This year due to COVID-19 the event will take place online. We will let you know how
                    this will effect the competition and how you can participate soon.
                </CardText>
            </InfoCard>
            <InfoCard title="Tools">
                <CardText>
                    <p>The following languages will be available during the contest:</p>
                    <ul>
                        <li>Java</li>
                        <li>C / C++</li>
                        <li>Python 2</li>
                        <li>Python 3</li>
                    </ul>
                </CardText>
            </InfoCard>
            <InfoCard title="Programme">
                <CardText>
                    <Table>
                        <Table.Head>
                            <Table.TextHeaderCell>
                                Time
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell>
                                Activity
                            </Table.TextHeaderCell>
                        </Table.Head>
                        <Table.Body>
                            <Table.Row>
                                <Table.TextCell>
                                    11:00
                            </Table.TextCell>
                                <Table.TextCell>
                                    Test setup, with the test question
                            </Table.TextCell>
                            </Table.Row>
                            <Table.Row>
                                <Table.TextCell>
                                    11:45
                            </Table.TextCell>
                                <Table.TextCell>
                                    Welcome speech
                            </Table.TextCell>
                            </Table.Row>
                            <Table.Row>
                                <Table.TextCell>
                                    12:00
                            </Table.TextCell>
                                <Table.TextCell>
                                    Competition starts
                            </Table.TextCell>
                            </Table.Row>
                            <Table.Row>
                                <Table.TextCell>
                                    17:00
                            </Table.TextCell>
                                <Table.TextCell>
                                    End of competition
                            </Table.TextCell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </CardText>
            </InfoCard>

        </Page >
    );
}