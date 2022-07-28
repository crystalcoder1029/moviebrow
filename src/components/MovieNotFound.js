import React from 'react'
import Banner from './Banner'

function MovieNotFound({text}) {
  return (
    <div>
        <Banner text={text}/>
        <div className="container p-5">
            <div className="row p-5">
                <div className="col d-flex align-items-center justify-content-center p-5">
                    <h1>OOPS!</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieNotFound