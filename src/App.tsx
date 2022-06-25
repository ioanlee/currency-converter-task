import { useEffect, useState } from 'react'
import { CurrTable } from './CurrTable'
import { CurrHistory } from './CurrHistory'
import { CurrConverter } from './CurrConverter'
import { rates_archive } from './db'

const api_key = 'e00d572a1a7549f32b011fea' // include in .gitignore
const base_url = `https://v6.exchangerate-api.com/v6/${api_key}/latest/USD`

function App() {

  const [showTable, setShowTable] = useState(true)
  const [showHistory, setShowHistory] = useState(true)
  const [currencyOptions, setCurrencyOptions] = useState(rates_archive[0].rates)

  // useEffect(() => {
  //   // const raw:string =  localStorage.getItem('rates') || '{}'
  //   // const raw:string = '{}'
  //   // setCurrencyOptions(JSON.parse(raw))
  //   // console.log(JSON.parse(raw))
  //   // need to provide unix time var to compare current time and trigger fetch
  //   // if (raw === '{}') { // delete later
  //     fetch(base_url)
  //       .then(res => res.json())
  //       .then(data => console.log(data.conversion_rates))
  //       // .then(data => console.log('API CALLED'))
  //       // .catch(err => console.error(err))
  //     // localStorage.setItem('rates', JSON.stringify(currencyOptions))
  //   // }
  // }, [])

  return (
    <>
      <CurrConverter currencyOptions={ currencyOptions }/>
      {/* <button onClick={ () => setShowTable(!showTable) } >Toggle Table</button> */}
      {/* <button onClick={ () => setShowHistory(!showHistory) } >Toggle History</button> */}
      { showTable && <CurrTable currencyOptions={currencyOptions}/> }
      { showHistory && <CurrHistory /> }
    </>
  )
}  

export default App