import React from 'react'

export default function Avatar({fullName}) {
  return (
    <>
        <h4 className="profile-start-name">{fullName && fullName.slice(0,1)}</h4>
    </>
  )
}
