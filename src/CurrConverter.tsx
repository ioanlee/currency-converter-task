import React, { FC, useEffect, useState } from 'react'
import { CurrConverterRow } from './CurrConverterRow'

interface Props {
  currencyOptions: {
    [key: string]: number
  },
}

export const CurrConverter = ({ currencyOptions }: Props) => {

  // const [fromAmount, setFromAmount] = useState(1)
  // const [toAmount, setToAmount] = useState(1)
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('RUB')
  const [exchangeRate, setExchangeRate] = useState(currencyOptions[toCurrency])
  const [isFromAmount, setIsFromAmount] = useState(true)
  
  // useEffect(() => {
  //   setExchangeRate(currencyOptions[toCurrency])
  // }, [])

  let fromAmount:number = 1, toAmount:number
  if (exchangeRate) {
    if (isFromAmount) {
      fromAmount = Number(amount)
      toAmount = Number((amount * exchangeRate).toFixed(2))
    } else {
      toAmount = Number(amount)
      fromAmount = Number((amount / exchangeRate).toFixed(2))
    }
  }

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      setIsFromAmount(false)
      setExchangeRate(currencyOptions[fromCurrency])
    }
  }, [fromCurrency])
  
  useEffect(() => {
    if (fromCurrency && toCurrency) {
      setIsFromAmount(true)
      setExchangeRate(currencyOptions[toCurrency])
    }
  }, [toCurrency])

  function reverse() {

    // setIsFromAmount(!isFromAmount)
    // const saved = fromCurrency
    // setFromCurrency(toCurrency)
    // setToCurrency(saved)


    // console.log({ fromCurrency, toCurrency, amount, fromAmount, toAmount, exchangeRate })
    // (isFromAmount) ? {setAmount(toAmount)} : {setAmount(fromAmount)}
    // setExchangeRate(1 / currencyOptions[fromCurrency] * currencyOptions[toCurrency])
  }
  const handleChangeToAmount = (e) => {
    setAmount(e.target.value)
    setIsFromAmount(false)
  }
  const handleChangeFromAmount = (e) => {
    setAmount(e.target.value)
    setIsFromAmount(true)
  }
  const handleChangeToCurrency = (e) => {
    setToCurrency(e.target.value)
  }
  const handleChangeFromCurrency = (e) => {
    setFromCurrency(e.target.value)
  }

  return (
    <div>
      <h2>Converter</h2>
      <CurrConverterRow 
        amount={fromAmount}
        selected={fromCurrency}
        currencyOptions={currencyOptions}
        onChangeAmount={handleChangeFromAmount}
        onChangeCurrency={handleChangeFromCurrency}
      />
      {`1 ${fromCurrency} = ${Number((1 / currencyOptions[fromCurrency] * currencyOptions[toCurrency]).toFixed(2))} ${toCurrency}`}
      <CurrConverterRow 
        amount={toAmount}
        selected={toCurrency}
        currencyOptions={currencyOptions}
        onChangeAmount={handleChangeToAmount}
        onChangeCurrency={handleChangeToCurrency}
      />
      <button onClick={reverse}>Reverse currency</button>
    </div>
  )
}
