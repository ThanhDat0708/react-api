import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import './assets/style.scss'
async  function getRandomCatUrl()
{
  const apikey=''
  const response = await axios.get(" https://api.thecatapi.com/v1/images/search?api_key="+ apikey);
  return response.data[0].url;
}
 function App() {
  const [url, setUrl] = useState('')
  const [isLoading ,setIsLoading] = useState(false)
  const handleClick = async ()=>
  {
    setIsLoading(true)
    setUrl(await getRandomCatUrl())
    setTimeout(() => {
      setIsLoading(false)
    },1000)


  }
  return (
    <>
     <div>
      <button onClick={async ()=>handleClick()}>click de lay anh </button>
     </div>
     <div> 
      {url && <img src={url} alt="" />}
     </div>
     {isLoading && <div className='Loading'onClick={async () => setIsLoading(false)}>
               Loading.....
     </div>}
    </>
  )
}

export default App
