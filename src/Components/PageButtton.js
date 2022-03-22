import React from 'react'

const PageButtton = ({data,pageHandler}) => {
    let pageNumbers=[];
    for(let i=1;i< Math.ceil(data.length/10+1);i++){
        pageNumbers.push(i)
    }
  return (
    <div>
        <center>
            {pageNumbers.map(page=><div className='btn btn-primary' style={{"margin":"2px"}} onClick={()=>pageHandler(page)}>{page}</div>)}
        </center>
    </div>
  )
}

export default PageButtton