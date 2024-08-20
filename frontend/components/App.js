import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
           .then(res => {
            console.log(res.data)
            setApod(res.data)
           })
           .catch(err => {
            console.log(err.message)
           })
    }
    //fetchPhoto()
    setApod({
          "copyright": "\nLuis Romero Ventura\n",
          "date": "2024-08-19",
          "explanation": "Inside the Cocoon Nebula is a newly developing cluster of stars. Cataloged as IC 5146, the beautiful nebula is nearly 15 light-years wide. Soaring high in northern summer night skies, it's located some 4,000 light years away toward the constellation of the Swan (Cygnus).  Like other star forming regions, it stands out in red, glowing, hydrogen gas excited by young, hot stars, and dust-reflected starlight at the edge of an otherwise invisible molecular cloud.  In fact, the bright star found near ...",
          "hdurl": "https://apod.nasa.gov/apod/image/2408/Cocoon_Ventura_2047.jpg",
          "media_type": "image",
          "service_version": "v1",
          "title": "IC 5146: The Cocoon Nebula",
          "url": "https://apod.nasa.gov/apod/image/2408/Cocoon_Ventura_960.jpg"
        })
  }, [])

  if(!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  )
}

export default App
