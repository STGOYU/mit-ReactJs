import React, { useEffect, useState } from 'react'
//import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
 // console.log(hexColor)
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const time = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return clearTimeout(time);
  }, [alert]);

  return (
    <article className={`color ${index > 5 && "color-light"} `}
      style={{ backgroundColor: `rgb(${bcg})`}}
      onclick = {()=>{
        setAlert(true)
        navigator.clipboard.writeText(`${hexValue}`)
      }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor