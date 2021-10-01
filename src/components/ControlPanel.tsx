import { useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import { Card } from '../interfaces/card'
import KANJI from '../assets/kanji.json'
import { getRandomElement } from '../utilities/data';


export function ControlPanel({setCard}: {setCard: (c: Card)=>void}): JSX.Element {

    return <Col>

        <h2>Control Panel</h2>        

        <Button onClick={
            () => setCard(getRandomElement(KANJI))
        }>Random</Button>

    </Col>

}