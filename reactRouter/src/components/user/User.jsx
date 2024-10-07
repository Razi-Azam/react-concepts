import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-slate-950 text-white text-2xl p-2'>User: {userid}</div>
  )
}

export default User