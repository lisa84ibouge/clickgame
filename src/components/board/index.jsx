import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

import Card from '../card'

export default function Board({ disabled, dimension, cards, flipped, solved, handleClick}) {
    return (<div className="Board">
        {cards.map((card, i) =>( 
            
     <Card
    key = {i}
    id={card.id}
    type={card.type}
    width={dimension / 3}
    height={dimension / 3}
    flipped={flipped.includes(card.id)}
    solved={solved.includes(card.id)}
    handleClick={handleClick}
    disabled={disabled || solved.includes(card.id)}

    />))
        }
    </div>
    )
}

Board.propTypes = {
    disabled: PropTypes.bool.isRequired,
    dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,

}