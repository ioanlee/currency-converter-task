import { useEffect, useState } from 'react'
import { CurrTable } from './CurrTable'
import { CurrHistory } from './CurrHistory'
import { CurrConverter } from './CurrConverter'

const api_key = 'e00d572a1a7549f32b011fea' // include in .gitignore
const base_url = `https://v6.exchangerate-api.com/v6/${api_key}/latest/RUB`

function App() {

  const [showTable, setShowTable] = useState(true)
  const [showHistory, setShowHistory] = useState(true)
  const [currencyOptions, setCurrencyOptions] = useState({})

  useEffect(() => {
    const raw:string =  localStorage.getItem('rates') || '{}'
    setCurrencyOptions(JSON.parse(raw))
    // console.log(JSON.parse(raw))
    // need to provide unix time var to compare current time and trigger fetch
    if (currencyOptions === {}) { // delete later
      fetch(base_url)
        .then(res => res.json())
        .then(data => setCurrencyOptions(data.conversion_rates))
        // .then(data => console.log('API CALLED'))
        .catch(err => console.error(err))
      localStorage.setItem('rates', JSON.stringify(currencyOptions))
    }
  }, [])

  return (
    <>
      <CurrConverter currencyOptions={currencyOptions}/>
      <button onClick={() => setShowTable(!showTable)}>Toggle Table</button>
      <button onClick={() => setShowHistory(!showHistory)}>Toggle History</button>
      { showHistory && <CurrHistory /> }
      { showTable && <CurrTable /> }
    </>
  )
}  

export default App