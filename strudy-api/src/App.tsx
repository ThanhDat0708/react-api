import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
async  function getRandomCatUrl()
{
  const apikey ='live_abulHayZU0WrnHDun8A2oIW6HuG6qXPYkGuV6Q1HMe1SY87w5xGZQOwprFWxUSBh'
  const response = await axios.get(" https://api.thecatapi.com/v1/images/search?api_key="+ apikey);
  return response.data[0].url;
}
 function App() {
  const [url, setUrl] = useState('')

  return (
    <>
     <div>
      <button onClick={async ()=>setUrl(await getRandomCatUrl())}>click de lay anh </button>
      {url && <img src={url} alt="anh" />}
     </div>
    </>
  )
}

export default App
