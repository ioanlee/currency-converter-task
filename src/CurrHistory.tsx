import { useState } from 'react'

export const CurrHistory = () => {
  const [showListOverGraph, setShowListOverGraph] = useState(true) 
  return (
    <div>
      <hr />
      <h2>History</h2>

      
      <button onClick={() => setShowListOverGraph(!showListOverGraph)}>Show {(showListOverGraph) ? 'Graph' : 'List'}</button>
      {showListOverGraph && <>
        <div>CurrTableList</div>
      </>}
      {!showListOverGraph && <>
        <div>CurrTableGraph</div>
      </>}
      

    </div>
  )
}
