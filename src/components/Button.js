import { useState, useContext } from 'react'
import DataContext from '../DataContext'

const Button = ({ label }) => {
    const ctx = useContext(DataContext)

    const clickHandler = () => {
        ctx.clearFilter()
    }

    return(
        <div className="button" onClick={ () => clickHandler() }>
            { label }
        </div>
    )
}

export default Button