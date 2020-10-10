import React from 'react';
import { Pane, Heading, Paragraph } from 'evergreen-ui'
import { colors, setColors } from '../Constants'

type InfoCardProps = {
    title?: string
    children?: any
}

export default function InfoCard({ title, children }: InfoCardProps) {

    return (
        <Pane flex={1} flexDirection="column" display="flex" elevation={1} background={setColors.cardBackground}
            justifyContent="center" margin={8} width="100%">
            <Pane margin={24}>
                {typeof title === 'string' &&
                    <Pane borderBottom="default" marginBottom={12} width="100%">
                        <Heading color={setColors.title} size={700}>{title}</Heading>
                    </Pane>
                }
                {children}
            </Pane>
        </Pane>
    );
}

type CardTextProps = {
    children?: any
}

export function CardText({ children }: CardTextProps) {

    return (
        <Paragraph color={setColors.text} size={500} marginBottom={8}>
            {children}
        </Paragraph>
    );
}