import { useEffect, useState } from 'react'

import './App.css'

import Input from './components/Input'
import Button from './components/Button'
import List from './components/List'

import DataContext from './DataContext'
import { fetchData } from './lib/API'

const App = () => {

    const [data, setData] = useState([])
    const [actual, setActual] = useState([])
    const [isLoaded, setLoaded] = useState(false)
    const [filterContent, setFilterContent] = useState('')

    useEffect(() => {
        fetchData()
            .then(result => {
                setActual(result)
                setData(result)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    const filterData = ( filter ) => {
        const filtered = data.filter( item => item.stationname.toLowerCase().includes(filter.toLowerCase()) );
        setFilterContent(filter)
        setActual(filtered)
    }

    const clearFilter = () => {
        setFilterContent('')
        setActual(data)
    }

  return(
      <DataContext.Provider value={{ actual, filterContent, filterData, clearFilter }}>
          <Input /><Button label={"clear filter"}/>
          <List />
      </DataContext.Provider>
  )
}

export default App