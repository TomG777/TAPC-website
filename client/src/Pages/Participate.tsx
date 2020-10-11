import React, {useEffect} from 'react';
import { Button } from 'evergreen-ui'
import Page from '../Components/Page';

export default function Participate() {

    const [response, setResponse] = React.useState('')

    function callApi() {
        fetch("http://localhost:5000/mail")
            .then(res => res.text())
            .then(res=>setResponse(res))
    }

    useEffect(() => {callApi()}, []);


    return (
        <Page>
            <p>Response: {response}</p>
        </Page>
    );
}