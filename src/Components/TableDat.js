import React, { createContext } from 'react'
import Hoc from './Hoc'
export const UseContext=createContext();
function TableDat() {
  return (
    <div>
        <UseContext.Provider value={"Hello HOC"}>
            <Hoc/>
        </UseContext.Provider>

    </div>
  )
}

export default TableDat