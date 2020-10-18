import { Heading, Pane } from 'evergreen-ui'
import React from 'react';
import {colors, setColors} from '../Constants'

type PageProps = {
    name?: string
    children: any
}


export default function Page({ name, children }: PageProps) {

    return (
        <Pane
            width="75%"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            marginLeft="auto"
            marginRight="auto"
            marginBottom='50px'
            marginTop="10px">

                <Heading marginLeft={24} size={800}>{name}</Heading>
                {children}

        </Pane>
    );

}