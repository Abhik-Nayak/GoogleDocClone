import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { createBoard } from './utils/createBoard';
import { updateBoard } from './store';
import Board from './components/Board';

const App = () => {
  const dispatch = useAppDispatch();

  const board = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize = useAppSelector(({ candyCrush: { boardSize } }) => boardSize);

  useEffect(() => {

    dispatch(updateBoard(createBoard(boardSize)))
  }, [boardSize, dispatch])
  return (
    <div className='flex items-center justify-center h-screen'>
      <Board />
    </div>
  )
}

export default App