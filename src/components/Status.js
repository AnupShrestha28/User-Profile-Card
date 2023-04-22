import React from 'react'

export default function Status({status}) {
  return (
    <>
        <p className={`profile-status ${status}`}></p>
    </>
  )
}
