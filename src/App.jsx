import React, {
  useState,
  useEffect
} from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./components/Game";
//import Readme from './readme'
import Card from './components/card'
import Board from './components/board'
//import images from '.images/'
import { countryFlags } from '../src/images'
import initializeDeck from "./deck"


export default function (App) {
  const [cards, setCards] = useState(countryFlags)
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck(countryFlags))
  }, [])

  useEffect(() => {
    
    preloadImages()
  }, cards)

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)
    return () => window.removeEventListener('resize', resizeListener)
  })

  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
    } else {
      if (sameCardClicked(id))
        return
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 2000)
      }
    }

  }

  const preloadImages = () => {
    console.log("Card: ", cards)
    cards.map((card) => {

      const src = `${card.image}`
      console.log(src)
      new Image().src = src
    })
    

  }


  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const sameCardClicked = (id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }

  const resizeBoard = () => {
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ), )
  }
  return ( <div>
    <h2>Can you remember where the cards are?</h2> <Board dimension = {
      dimension
    }
    cards = {
      cards
    }
    flipped = {
      flipped
    }
    handleClick = {
      handleClick
    }
    disabled = {
      disabled
    }
    solved = {
      solved
    }
    /> </div>
  )
}