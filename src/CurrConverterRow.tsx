import React, { FC, useEffect } from 'react'

interface Props {
  currencyOptions: {
    [key: string]: number
  }
  selected: string
  onChangeCurrency: {}
}

export const CurrConverterRow = ({ currencyOptions, selected, onChangeCurrency }: Props) => {
  return (
    <div>
      <input type="number" />
      <select value={selected} onChange={onChangeCurrency}>
        {Object.entries(currencyOptions).map(option => 
          <option value={option[0]}>{option[0]}</option>
        )}
      </select>
      <div>{}</div>
    </div>
  )
}
