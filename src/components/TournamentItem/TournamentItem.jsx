import React from 'react'
import './/tournamentItem.css';
import Spinner from '../../components/Spinner/Spinner';



function TournamentItem() {
  return (
    <div>
      <Spinner 
      tournamentName ={"OFC Pineapple"}
      nums = {"nl 2-7 TRIPLE DRAW"}
      button = {"JOIN TABLE"}
      quantity = {"1000/1000"}
      cup = {"1000000"}
      />

<Spinner 
      tournamentName ={"OFC Pineapple"}
      nums = {"nl HOLDEM"}
      button = {"JOIN TABLE"}
      quantity = {"1/6"}
      cup = {"100"}
      />

<Spinner 
      tournamentName ={"OFC Pineapple"}
      nums = {"nl OFC/PINEAPPLE PRG"}
      button  = {"Canceled"}
      quantity = {"1/10 000"}
      cup = {"1000"}
      />

<Spinner 
      tournamentName ={"OFC Pineapple"}
      nums = {"nl 2-7 TRIPLE DRAW"}
      button = {"JOIN TABLE"}
      quantity = {"1000/1000"}
      cup = {"1000000"}
      />

<Spinner 
      tournamentName ={"OFC Pineapple"}
      nums = {"nl 2-7 TRIPLE DRAW"}
      button = {"JOIN TABLE"}
      quantity = {"1000/1000"}
      cup = {"1000000"}
      />




    </div>
  )
}

export default TournamentItem