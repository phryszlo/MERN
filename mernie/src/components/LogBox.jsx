import React from 'react'

function LogBox({msg, logFn}) {
  return (
    <div className="log-box">{msg}</div>
  )
}

export default LogBox