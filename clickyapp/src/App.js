import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./components/Game";
import Readme from './readme'
import Card from './components/card'
import Board from './components/board'
import initializeDeck from "./deck"

export default function (App) {
  const [cards, setCards] = useState([])
  const [ flipped, setFlipped] = useState([])

  useEffect(() => {
    setCards(initializeDeck())
  }, [])

  const handleClick = (id) => 
    setFlipped([ ...flipped, id])

  
  
  return (
    <div>
    <h2>Can you remember where the cards are?</h2>
    <Board
    cards= {cards}
    flipped = {flipped}
    handleClick = {handleClick} />
    </div>
  )
}