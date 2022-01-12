import React from 'react'
import style from './recipe.module.css'
function Recipe({title,calories,image,ingredients}) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>calories : {calories}</p>
            <img className={style.image}src={image} alt=''></img>
            <ol>
                {
                    ingredients.map(ingredient =>
                        (
                        <li>{ingredient.text}</li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Recipe