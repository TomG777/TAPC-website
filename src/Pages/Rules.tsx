import React from 'react';
import { Button } from 'evergreen-ui'
import Page from '../Components/Page';
import InfoCard, { CardText } from '../Components/InfoCard';

export default function Rules() {
    return (
        <Page>
            <InfoCard title="Participation">
                <CardText>
                    Teams can participate as an official team or as an unofficial team
                </CardText>
            </InfoCard>
            <InfoCard title="Official Team">
                <CardText>
                    <p>
                        An <i>official team</i> has a maximum of three team members. Each team member has to be a student at either
                        the University of Twente or Saxion Hogescholen. All team members have to be a student at the same
                        organisation to be qualified to the <i>ICPC World&nbsp;Finals</i>. To qualify, each student:
                    </p>
                    <ol>
                        <li>Must be willing and able to compete in the World Finals.</li>
                        <li>Must be enrolled in a degree program at the sponsoring institution with at least a half-time load.
                        This rule is not to be construed as disqualifying co-op students, exchange students, students serving
                        internships, or extramural students.
                        </li>
                        <li>May compete for only one institution during a contest year.</li>
                        <li>Has competed in two World Finals is NOT eligible to compete.</li>
                        <li>A student who has competed in five Regional Contests is NOT eligible to compete.</li>
                    </ol>
                    <p>
                        An <i>official team</i> can continue on to the <i>BAPC</i> (Benelux Algorithm Programming Contest).
                        </p>
                </CardText>
            </InfoCard>
            <InfoCard title="Unoffcial Team">
                <CardText>
                    An <i>unofficial team</i> has a maximum of three team members. An <i>unofficial team</i> can <b>NOT </b>
                     continue on to the <i>BAPC</i> (Benelux Algorithm Programming Contest).
                </CardText>
            </InfoCard>
            <InfoCard title="Competition">
                <CardText>
                    The competition lasts five hours.
                </CardText>
            </InfoCard>
            <InfoCard title="Exercises">
                <CardText>
                    <ol>
                        <li>The competition has between six and ten exercises.
                        </li>
                        <li>The exercises are in English.
                        </li>
                        <li>When an exercise is unclear, a team can ask for clarification in the form of <i>clarification
                request</i>. This request will be handled by the committee. If the result of the clarification request
                is relevant to other teams, it will be published.
                        </li>
                        <li>Exercises can be changed or removed during the contest. When this happens, all teams will be informed.
                        </li>
                    </ol>
                </CardText>
            </InfoCard>
            <InfoCard title="Judging">
                <CardText>
                    <ol>
                        <li>Answers are only counted for scoring if they are handed in in the designated system.
                        </li>
                        <li>All answers will be automatically judged by a judging system, and/or manually checked by the
                        organisation.
                        </li>
                        <li>For each exercise a testinput is provided, with a correct answer corresponding to that input.
                        </li>
                        <li>An answer is corredt when the (or sometimes a) correct output is given within a certain time limit. The
                        time limit may not be known beforehand.
                        </li>
                        <li>The judging of an answer will be made known to the team.
                        </li>
                    </ol>
                </CardText>
            </InfoCard>
            <InfoCard title="Scoring and Winning">
                <CardText>
                    <ol>
                        <li>The winner of this competition is the team with the most exercises solved.
                        </li>
                        <li>When teams have the same score, the team with the lowest time penalty wins. For each exercise, a team
                        gets a minute added to their time penalty for each minute that has elapsed since the start of the
                        contest, until the moment the answer was handed in. For each incorrect answer handed in before handing
                        in a correct answer to the same exercise, 20 minutes of time penalty are added. No penalty is added for
                        exercises that aren't solved.
                        </li>
                        <li>When the time penalty is the same, the organisation decides who wins.
                        </li>
                        <li>The scoreboard freezes for the final hour, before that, the scoreboard is publicly available.
                        </li>
                        <li>Answers sent in after the contest has ended do not count for the score.
                        </li>
                    </ol>
                </CardText>
            </InfoCard>
            <InfoCard title="Other">
                <CardText>
                    <ol>
                        <li>The organisation reserves the right to disqualify teams that don't obey the rules, or are misbehaving.
                        </li>
                        <li>The organisation reserves the right to, in exceptional cases, end the contest early, stop the contest
                        temporarily, or add more time to the contest. The organisation also reserves the right to change scores.
                        </li>
                        <li>In situations not covered by this rules, the organisation decides.
                        </li>
                    </ol>
                </CardText>
            </InfoCard>


        </Page>
    );
}