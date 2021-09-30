import { Card } from "../interfaces/card";

export function DisplayCard({card}: {card: Card}): JSX.Element {
    return <div>
        <h1>Displayed Card</h1>
        <div>Current Card: {card.Kanji}</div>
    </div>


}