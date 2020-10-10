import React from 'react';
import { Pane, Heading } from 'evergreen-ui'

type InfoCardProps = {
    title?: string
    children?: any
}

export default function InfoCard({ title, children }: InfoCardProps) {

    return (
        <Pane flex={1} flexDirection="column" alignItems="center" display="flex"
        justifyContent="center" margin={24} borderLeft="default" borderRight="default">
            <Pane margin={24}>
                {typeof title === 'string' &&
                    <Pane borderBottom="default" marginBottom={12}>
                        <Heading size={700}>{title}</Heading>
                    </Pane>
                }
                {children}
            </Pane>
        </Pane>


    );

}