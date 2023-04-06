import { useEffect, useState } from 'react'

import './App.css'

import Input from './components/Input'

import { fetchData } from './lib/API'

const App = () => {

    const [data, setData] = useState([])
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() => {
        fetchData()
            .then(result => {
                console.log(result)
                setData(result)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

  return(
      <div>
          <Input />
      </div>
  )
}

export default App