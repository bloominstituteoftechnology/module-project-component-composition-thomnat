import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'


const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`




function App() {
  const [apod, setApod] = useState()
  useEffect(()=> {
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
    // fetchPhoto()
    setApod({
      "copyright": "\nRitesh Biswas\n",
      "date": "2024-01-09",
      "explanation": "Thor not only has his own day (Thursday), but a helmet in the heavens.  Popularly called Thor's Helmet, NGC 2359 is a hat-shaped cosmic cloud with wing-like appendages. Heroically sized even for a Norse god, Thor's Helmet is about 30 light-years across. In fact, the cosmic head-covering is more like an interstellar bubble, blown with a fast wind from the bright, massive star near the bubble's center. Known as a Wolf-Rayet star, the central star is an extremely hot giant thought to be in a brief,...",
      "hdurl": "https://apod.nasa.gov/apod/image/2401/ThorsHelmet_Biswas_1436.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Thor's Helmet",
    })
  }, []);
  if (!apod) return 'Fetching photo of the day...'
  return(
    <section>
      <Card 
      title={apod.title} 
      text={apod.explanation} 
      imageURL={apod.hdurl} 
      date={apod.date}
      />
    </section>
  )
}

export default App
