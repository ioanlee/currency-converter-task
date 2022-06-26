import { useState, useEffect } from 'react'
import { rates_archive } from './db'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Props {
  currencyOptions: {    
    [key: string]: number
  }
}

function convertTimestamp(timestamp:number) {
  let d = new Date(timestamp * 1000),
      yyyy = d.getFullYear(),
      mm = ('0' + (d.getMonth() + 1)).slice(-2),
      dd = ('0' + d.getDate()).slice(-2),
      hh = d.getHours(),
      h = hh,
      min = ('0' + d.getMinutes()).slice(-2),
      ampm = 'AM',
      time

  if (hh > 12) {
      h = hh - 12
      ampm = 'PM'
  } else if (hh === 12) {
      h = 12
      ampm = 'PM'
  } else if (hh == 0) h = 12

  // time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
  // ie: 2014-03-24, 3:00 PM
  return `${dd}-${mm}-${yyyy}`
}

// console.log(history_array)
// data.slice(0,10).map(x => x.place_id)

export const CurrHistory = ({ currencyOptions }: Props) => {
  const [ showListOverGraph, setShowListOverGraph ] = useState(false)
  const [ fromCurrency, setFromCurrency ] = useState('USD')
  const [ toCurrency, setToCurrency ] = useState('RUB')
  const [ exchangeRate, setExchangeRate ] = useState(1)
  const [ historyArray, setHistory_array ] = useState(rates_archive.slice(0, 10).map(arr => { return { exchange_rate: (arr.rates['RUB'] / arr.rates['USD']).toFixed(4), timestamp: convertTimestamp(arr.timestamp), }}))

  useEffect(() => {
    setHistory_array(rates_archive.slice(0, 10).map(arr => {return { timestamp: convertTimestamp(arr.timestamp), exchange_rate: (arr.rates[toCurrency] / arr.rates[fromCurrency]).toFixed(4) }}))
  }, [ fromCurrency, toCurrency ])

  return (
    <div>
      <hr />
      <h2>History</h2>

      <div style={{display: 'flex', gap: '10px', padding: '0 0 10px'}}>
        <select defaultValue={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {Object.keys(currencyOptions).map((value, pos) => <option key={pos} value={value}>{value}</option>)}
        </select>
        <select defaultValue={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {Object.keys(currencyOptions).map((value, pos) => <option key={pos} value={value}>{value}</option>)}
        </select>
      </div>

      <button onClick={() => setShowListOverGraph(!showListOverGraph)}>Show {(showListOverGraph) ? 'Graph' : 'List'}</button>
      {!showListOverGraph && <>
        <div style={{ height: '200px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={historyArray} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis domain={[ Math.min(...historyArray.map(entry => Number(entry.exchange_rate))), Math.max(...historyArray.map(entry => Number(entry.exchange_rate))) ]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="exchange_rate" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      </>}
      {showListOverGraph && <>
        <div>CurrTableList</div>       
        <div>{fromCurrency} to {toCurrency}</div>
        { historyArray.map((value, pos) => <>
          <div key={pos}>{ value.timestamp } - { value.exchange_rate }</div>
        </>) }
      </>}
    </div>
  )
}