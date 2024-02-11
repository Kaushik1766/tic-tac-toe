import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isNext, setNext] = useState('X')
  const [winner, setWinner] = useState(null)

  function result(sq) {
    let winningStates = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [6, 4, 2],
      [0, 4, 8]
    ]
    for (let i = 0; i < winningStates.length; i++) {
      let [a, b, c] = winningStates[i]
      if (sq[a] == sq[b] && sq[b] == sq[c]) {
        return sq[a]
      }
    }
    return null
  }

  function changeSquare(id) {
    let nextSquares = squares.slice()
    if (nextSquares[id] == null) {
      if (isNext == 'X') {
        nextSquares[id] = 'X'
        setNext('O')
      }
      else if (isNext == 'O') {
        nextSquares[id] = 'O'
        setNext('X')
      }
    }
    let winner = result(nextSquares)
    if (winner) {
      setNext(`The winner is ${winner}`)
    }
    setSquares(nextSquares)

  }
  return (
    <>
      <div className="mx-auto w-max h-[100vh] justify-center flex flex-col ">
        <div className='border-4 rounded-lg bg-black opacity-50'>
          <div className='flex flex-row'>
            <Square id='0' val={squares[0]} updateVal={(id) => { changeSquare(id) }} />
            <Square id='1' val={squares[1]} updateVal={(id) => { changeSquare(id) }} />
            <Square id='2' val={squares[2]} updateVal={(id) => { changeSquare(id) }} />
          </div>
          <div className='flex flex-row'>
            <Square id='3' val={squares[3]} updateVal={(id) => { changeSquare(id) }} />
            <Square id='4' val={squares[4]} updateVal={(id) => { changeSquare(id) }} />
            <Square id='5' val={squares[5]} updateVal={(id) => { changeSquare(id) }} />
          </div>
          <div className='flex flex-row'>
            <Square id='6' val={squares[6]} updateVal={(id) => { changeSquare(id) }} />
            <Square id='7' val={squares[7]} updateVal={(id) => { changeSquare(id) }} />
            <Square id='8' val={squares[8]} updateVal={(id) => { changeSquare(id) }} />
          </div>
        </div>
        <div className='mt-5 text-center text-2xl bg-black opacity-50 rounded-lg text-white p-2'>
          {
            (isNext == 'X' || isNext == 'O') ? <p>Next player is {isNext} </p> : <p>{isNext} </p>
          }
        </div>
      </div>
    </>
  )
}

export default Board