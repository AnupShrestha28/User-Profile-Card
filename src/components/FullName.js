// import React, { Component } from 'react'

// export default class FullName extends Component {
//   render() {
//     return (
//         <>
//             <h1 className="profile-full-name">{this.props?.fullName || ''}</h1>
//         </>
//     )
//   }
// }


import React from 'react'

export default function FullName({fullName}) {
  return (
    <>
        <h1 className="profile-full-name">{fullName || ''}</h1>
    </>
  )
}
