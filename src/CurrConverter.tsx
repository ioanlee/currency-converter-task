import React, { FC, useEffect, useState } from 'react'
import { CurrConverterRow } from './CurrConverterRow'

interface Props {
  currencyOptions: {
    [key: string]: number
  },
}

export const CurrConverter = ({ currencyOptions }: Props) => {

  const [fromCurrency, setFromCurrency] = useState('')
  const [toCurrency, setToCurrency] = useState('')

  
  useEffect(() => {
    setFromCurrency(Object.keys(currencyOptions)[0])
    setToCurrency(Object.keys(currencyOptions)[0])
  }, [])

  return (
    <div>
      <h2>Converter</h2>
      <CurrConverterRow 
        currencyOptions={currencyOptions}
        selected={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
      />
      =
      <CurrConverterRow 
        currencyOptions={currencyOptions}
        selected={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
      />
    </div>
  )
}
