import React, { useEffect } from 'react';
import { Button, Dialog, Heading, Paragraph, TextInput } from 'evergreen-ui'
import Page from '../Components/Page';
import InfoCard, { CardText } from '../Components/InfoCard';

export default function Participate() {

    const [response, setResponse] = React.useState('')
    const [team, setTeam] = React.useState(["", false]);
    const [person1, setPerson1] = React.useState(["", "", ""])
    const [person2, setPerson2] = React.useState(["", "", ""])
    const [person3, setPerson3] = React.useState(["", "", ""])
    const [backendError, setBackendError] = React.useState(false);


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            team: `${team[0]}`, official: team[1],
            name1: `${person1[0]}`, email1: `${person1[2]}`, number1: `${person1[1]}`,
            name2: `${person2[0]}`, email2: `${person2[2]}`, number2: `${person2[1]}`,
            name3: `${person3[0]}`, email3: `${person3[2]}`, number3: `${person3[1]}`,

        })
    };

    function callApi() {
        fetch("http://localhost:5000/register", requestOptions)
            .then(res => res.text())
            .then(res => { console.log(res); setResponse(res); })
            .catch(() => setBackendError(true))
    };


    return (
        <Page>
            <InfoCard title="Participant 1">
                <div style={{ display: 'flex', alignItems: "center", marginBottom: "20px" }}>
                    <Heading marginRight={40}>Name: </Heading>
                    <TextInput marginLeft={170}
                        onChange={(e: any) => setPerson1([e.target.value, person1[1]])}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: "center", marginBottom: "20px" }}>
                    <Heading marginRight={40}>Student number: </Heading>
                    <TextInput marginLeft={100}
                        onChange={(e: any) => setPerson1([person1[0], e.target.value])}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: "center" }}>
                    <Heading marginRight={40}>Email: </Heading>
                    <TextInput marginLeft={172}
                        onChange={(e: any) => setPerson1([person1[0], person1[1], e.target.value])}
                    />
                </div>
            </InfoCard>
            <InfoCard title="Participant 2">
                <div style={{ display: 'flex', alignItems: "center", marginBottom: "20px" }}>
                    <Heading marginRight={40}>Name: </Heading>
                    <TextInput marginLeft={170}
                        onChange={(e: any) => setPerson2([e.target.value, person2[1]])}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: "center", marginBottom: "20px" }}>
                    <Heading marginRight={40}>Student number: </Heading>
                    <TextInput marginLeft={100}
                        onChange={(e: any) => setPerson2([person2[0], e.target.value])}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: "center" }}>
                    <Heading marginRight={40}>Email: </Heading>
                    <TextInput marginLeft={172}
                        onChange={(e: any) => setPerson2([person2[0], person2[1], e.target.value])}
                    />
                </div>
            </InfoCard>
            <InfoCard title="Participant 3">
                <div style={{ display: 'flex', alignItems: "center", marginBottom: "20px" }}>
                    <Heading marginRight={40}>Name: </Heading>
                    <TextInput marginLeft={170}
                        onChange={(e: any) => setPerson3([e.target.value, person3[1]])}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: "center", marginBottom: "20px" }}>
                    <Heading marginRight={40}>Student number: </Heading>
                    <TextInput marginLeft={100}
                        onChange={(e: any) => setPerson3([person3[0], e.target.value])}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: "center" }}>
                    <Heading marginRight={40}>Email: </Heading>
                    <TextInput marginLeft={172}
                        onChange={(e: any) => setPerson3([person3[0], person3[1], e.target.value])}
                    />
                </div>
            </InfoCard>
            <Button marginTop={12} onClick={() => callApi()}>Send</Button>
            <p>Hey: {response}</p>

            <Dialog
                isShown={backendError}
                onCloseComplete={() => setBackendError(false)}
                hasFooter={false}
                hasHeader={false}
            >
                <InfoCard title="Backend Error">
                    <CardText>
                        The committee seems to have failed you and let the backend not work right now.
                        Please email tkp@inter-actief.net to let this know and register your team.
                        We are so sorry for this
                    </CardText>

                </InfoCard>
                </Dialog>
        </Page>
    );
}