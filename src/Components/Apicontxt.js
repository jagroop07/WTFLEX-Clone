import React, {createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const contxt = createContext()

const Apicontxt = ({children}) => {
    const [data, setdata] = useState([])
    useEffect(() => async()=>{
      const response = await axios.get('https://mocki.io/v1/2b17ec18-0e21-4ec4-bc46-ae7d5509a764')
      setdata(response.data)
    },[])

    let [dataa, setdataa] = useState([])
  return (
    <div>
      <contxt.Provider value={{data, dataa, setdataa}}>
        {children}
      </contxt.Provider>
    </div>
  )
}

export default Apicontxt
