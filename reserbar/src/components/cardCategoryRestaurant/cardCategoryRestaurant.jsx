import React from 'react'

const CardCategoryRestaurant = ({onClick, title, srcImage}) => {
    return (
        <div onClick={onClick} className='categoryCard'>
            <img className='categoryCard__image' src={srcImage} alt="imgResto" />
            <h3 className='categoryCard__text'>{title}</h3>
        </div>
    )
}

export default CardCategoryRestaurant