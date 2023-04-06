import { useState, useContext } from 'react'
import DataContext from '../DataContext'
import ListItem from './ListItem'

const List = () => {

    const ctx = useContext(DataContext)

    return(
        <div className="list-container">
            <h2>Overzicht</h2>
            {
                ctx.actual.map( (item) => {
                    return(
                        <ListItem key={`${item.$id}`} item={item} />
                    )
                })
            }
        </div>
    )

}

export default List