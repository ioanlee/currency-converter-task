import React, { FC, useEffect } from 'react'

interface Props {
  amount: number,
  selected: string
  onChangeAmount: {}
  onChangeCurrency: {}
  currencyOptions: {[key: string]: number}
}

export const CurrConverterRow = (props: Props) => {
  const {
    amount,
    selected,  
    onChangeAmount,
    onChangeCurrency,
    currencyOptions,
  } = props
  
  return (
    <div>
      <input type="number" value={amount} onChange={onChangeAmount}/>
      <select value={selected} onChange={onChangeCurrency}>
        {Object.entries(currencyOptions).map(option => <option value={option[0]}>{option[0]}</option>)}
      </select>
    </div>
  )
}
