import { useState, useEffect } from 'react'

interface Props {
  currencyOptions: {    
    [key: string]: number
  }
}

export const CurrTable = ({ currencyOptions }: Props) => {

  const [ fromCurrency, setFromCurrency ] = useState('USD')
  const [ toCurrency, setToCurrency ] = useState('USD')
  const [ exchangeRate, setExchangeRate ] = useState(1)
  const template = [ 1, 5, 10, 25, 50, 100, 500, 1000, 5000 ]

  useEffect(() => {    
    setExchangeRate(1 / currencyOptions[fromCurrency] * currencyOptions[toCurrency])
  }, [fromCurrency, toCurrency])

  return (
    <div className='currency-section'>
      <h2>Table</h2>
      
      <div style={{display: 'flex', gap: '10px', padding: '0 0 10px'}}>
        <select defaultValue={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {Object.keys(currencyOptions).map((value, pos) => <option key={pos} value={value}>{value}</option>)}
        </select>
        <select defaultValue={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {Object.keys(currencyOptions).map((value, pos) => <option key={pos} value={value}>{value}</option>)}
        </select>
      </div>
      
      <div style={{display: 'flex', gap: '10px'}}>
        <div>{ template.map((value, pos) => <div key={pos}>{value} {fromCurrency} = {Number((value * exchangeRate).toFixed(2))} {toCurrency}</div>) }</div>
        <div>{ template.map((value, pos) => <div key={pos}>{value} {toCurrency} = {Number((value / exchangeRate).toFixed(2))} {fromCurrency}</div>) }</div>
      </div>

    </div>
  )
}
