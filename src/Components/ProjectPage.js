import React from 'react'
import TicTacToe from '../Components/Projects/TicTacToe'
import Mindreader from './Projects/Mindreader'

export default function ProjectPage() {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center'>Projects</h1>
                <TicTacToe />
                <Mindreader />
            </div>
        </div>
    )
}
