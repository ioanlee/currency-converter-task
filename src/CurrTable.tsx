import React, { useState, useEffect } from 'react'

export const CurrTable = () => {

  const [showListOverGraph, setShowListOverGraph] = useState(true)

  useEffect(() => {
    console.log('triggered')

  }, [showListOverGraph])

  return (
    <div>
      <hr />
      <h2>Table</h2>
      <button onClick={() => setShowListOverGraph(!showListOverGraph)}>Show {(showListOverGraph) ? 'Graph' : 'List'}</button>
      {showListOverGraph && <div>List</div>}
      {!showListOverGraph && <div>Graph</div>}
    </div>
  )
}
