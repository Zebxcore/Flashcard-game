import Button from '@restart/ui/esm/Button';
import { Col } from 'react-bootstrap';
import { Card } from '../interfaces/card'

export function ControlPanel({setCard}: {setCard: (c: Card)=>void}): JSX.Element {
    return <Col>
        <h2>Control Panel</h2>        <Button>Previous Card</Button>
        <Button>Next Card</Button>
    </Col>
}