import { useState, useContext } from 'react'
import DataContext from '../DataContext'

const Input = () => {

    const ctx = useContext(DataContext)

    const inputHandler = (value) => {
       ctx.filterData(value)
    }

    return(
        <div className="input-container">
            <input type="text"
                   value={ ctx.filterContent }
                   placeholder="Regio"
                   onChange={ (e) => inputHandler(e.target.value)}
            />
        </div>
    )

}

export default Input