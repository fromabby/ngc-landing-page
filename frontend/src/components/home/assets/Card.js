import React from 'react'

const Card = (props) => {
    console.log(props)

    const { image, xlmns, smallicon, title, subtitle, description } = props

    return (
        <>
            <li>
                <a href="" class="card">
                    <img src={image} class="card__image" alt="" />
                    <div class="card__overlay">
                        <div class="card__header">
                            <svg class="card__arc" xmlns={xlmns}><path /></svg>
                            <img class="card__thumb" src={smallicon} alt="" />
                            <div class="card__header-text">
                                <h3 class="card__title">{title}</h3>
                                <span class="card__status">{subtitle}</span>
                            </div>
                        </div>
                        <p class="card__description">{description}</p>
                    </div>
                </a>
            </li>
        </>
    )
}

export default Card
