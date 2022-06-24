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

  interface Dataa {
    conversion_rates: any[],
  }

  useEffect(() => {
    fetch(base_url)
      .then(res => res.json())
      .then(data => setCurrencyOptions(data.conversion_rates))
      // .then(data => console.log(currencyOptions))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <button onClick={() => setShowTable(!showTable)}>Toggle Table</button>
      { showTable && <CurrTable /> }
      <hr />
      <button onClick={() => setShowHistory(!showHistory)}>Toggle History</button>
      { showHistory && <CurrHistory /> }
      <hr />
      <CurrConverter currencyOptions={currencyOptions}/>
    </>
  )
}  

export default App