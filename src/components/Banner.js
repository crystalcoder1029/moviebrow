import React from 'react'

function Banner({text}) {
  return (
    <div className="banner">
        <div className="container p-0">
            <h1 className="banner-title">{text}</h1>
        </div>
    </div>
  )
}

export default Banner