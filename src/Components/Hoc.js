import React from 'react'

import { UseContext } from './TableDat'
function Hoc() {
  return (
    <div>
<UseContext.Consumer>
{value=><h1>{value}</h1>}
</UseContext.Consumer>
    </div>
  )
}

export default Hoc