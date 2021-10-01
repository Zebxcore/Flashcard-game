import { Card } from "../interfaces/card";
import { Card as BootstrapCard } from 'react-bootstrap';

export function DisplayCard({card}: {card: Card}): JSX.Element {
    return <div>
        <BootstrapCard className="Card">
            <BootstrapCard.Body>
                <BootstrapCard.Title>Kanji</BootstrapCard.Title>
                <BootstrapCard.Text className="reading">
                {card.reading}
                </BootstrapCard.Text>

                <BootstrapCard.Text className="kanji">
                {card.kanji}
                </BootstrapCard.Text>

                <BootstrapCard.Text className="meaning">
                Meaning: {card.meaning}
                </BootstrapCard.Text>
            </BootstrapCard.Body>
        </BootstrapCard>
    </div>

}