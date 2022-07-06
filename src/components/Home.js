import React, { useState } from 'react'

function Home() {

const [data, setData] = useState('')

const onchange = (data) =>{
    setData(data);
}

  return (
    <div>
        <form>
            <input value={data} onChange={(el)=>{onchange(el)}} placeholder="Enter some value...." />
            <h2>{data}</h2>
        </form>
    </div>
  )
}

export default Home