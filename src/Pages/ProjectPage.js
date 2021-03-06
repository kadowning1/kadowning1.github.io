import React from 'react'
import TicTacToe from '../Components/Projects/TicTacToe'
import Mindreader from '../Components/Projects/Mindreader'
import Todo from '../Components/Projects/Todo'
import FishingHooks from '../Components/Projects/FishingHooks'
import Menu from '../Components/Projects/Menu'
import Weather from '../Components/Projects/Weather'
import FinalProject from '../Components/Projects/FinalProject'
import { Hulu } from '../Components/Projects/Hulu'

export default function ProjectPage() {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center'>Projects</h1>
                <Mindreader />
                <TicTacToe />
                <Todo />
                <Menu />
                <Weather />
                <FishingHooks />
                <FinalProject />
                <Hulu />
            </div>
        </div>
    )
}
