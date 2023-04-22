import React from 'react'

export default function ProgressBar({progressBar}) {
  return (
    <>
        <p className="profile_progress_bar__bar" style={{ width:progressBar || 0}}></p>
    </>
  )
}
