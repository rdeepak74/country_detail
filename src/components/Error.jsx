import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const {status, statusText, data} =useRouteError();
    console.log(status);
  return (
    <>
    <h1>{status}</h1>
    <p>{statusText}</p>
    <p>{data}</p>
    </>
  )
}

export default Error