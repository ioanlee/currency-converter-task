import React, { FC, FunctionComponentFactory, useEffect } from 'react'

interface Props {
  amount: number,
  selected: string
  onChangeAmount: any
  onChangeCurrency: any
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
        {Object.keys(currencyOptions).map(value => <option value={value}>{value}</option>)}
      </select>
    </div>
  )
}