import React from 'react';
import style from './recipe.module.css';

const Receipe = ({title, calories,image, ingredients}) => {
    return (
        <div className= {style.recipe}>
            <h1>Dish: {title}</h1>
            <ol className={style.list}>
                <h4>Ingredients used</h4>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p><h4>Calories: {calories}</h4></p>
            <img src = {image} alt=""/>
        </div>
    );
};

export default Receipe;