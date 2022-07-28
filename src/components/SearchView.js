import React from 'react'
import Banner from './Banner'
import MovieCard from './MovieCard'

function SearchView({keyword, searchResult}) {

  const bannerText = `Search Result of ${keyword}`

  const resultsHtml = searchResult.map((obj,id)=>{
    return <MovieCard movie={obj} key={id}/>
  })

  return (
    <div>
        <Banner text={bannerText}/>
        <div className="container p-0 pt-3">
          <div className="row justify-content-center">
            {resultsHtml}
          </div>
        </div>
    </div>
  )
}

export default SearchView