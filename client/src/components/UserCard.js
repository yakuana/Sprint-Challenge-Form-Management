import React from 'react';

const DishCard = ({ props }) => {
    return (
        <div className="usercard-container">
            <p>Food: {props.name}</p>
            <p>Course: {props.main}</p>
            <p>Technique: {props.technique}</p>
            <p data-testid="ingredient">Ingredients</p>
            
            {props.ingredients.map((food) => {
                return (
                    <p key={food}>- {food}</p>
                )
            })}
           
        </div>
    )
}

export default DishCard; 