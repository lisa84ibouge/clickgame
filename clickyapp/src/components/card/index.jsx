import React from 'react';
import PropTypes from 'prop-types'
//import images from './images'
import './styles.css'



export default function Card({
    handleClick,
    id,
    type,
    flipped,
    solved,
    height,
    width, 
    disabled
}) {
console.log('type:', type);
    return ( 
        <div 
        className = {`flip-container ${flipped ? 'flipped' : ''} `
        }
        style = {
            {
                width,
                height
            }
        }
        onClick = {
            () => disabled ? null : handleClick(id)
        } >
        <div 
        className = "flipped" >
        <img style = {
            {
                height,
                width
            }
        }
            className = {
            flipped ? 'front' : 'back'
        }
        src = {
            flipped || solved ? `${type.image}` : `/img/back.jpg`
        }
        /> </div>  </div>
    )
}



Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired,
}