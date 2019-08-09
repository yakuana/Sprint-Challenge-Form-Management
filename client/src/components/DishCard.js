import React from 'react';
import { Card } from 'semantic-ui-react';

const DishCard = ({ props }) => {
    
    return (
        // <div className="usercard-container">
        //     <p><strong>Food:</strong> {props.name}</p>
        //     <p><strong>Course:</strong> {props.course}</p>
        //     <p><strong>Technique:</strong> {props.technique}</p>
        //     <p data-testid="ingredient"><strong>Ingredients:</strong></p>
            
        //     {props.ingredients.map((food) => {
        //         return (
        //             <p key={food}>- {food}</p>
        //         )
        //     })}
           
        // </div>

        <Card>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>
                    <span>{props.course}</span>
                </Card.Meta>
                <Card.Description>
                Technique: {props.technique}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                Ingredients: {props.ingredients.map((food) => {
                return (
                    <Card.Description key={food}>{food}</Card.Description>
                )
                })}
            </Card.Content>
        </Card>
    )
}

export default DishCard; 