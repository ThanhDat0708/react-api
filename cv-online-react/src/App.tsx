import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../public/scss/style.scss'
import MainLayout from './layouts/MainLayout.tsx'
import PersonalInfor from './pages/PersonalInfor.tsx'
import Projects from './pages/Projects.tsx'
import Skills from './pages/Skill.tsx'

function App() {

  return (
    <>
       <BrowserRouter>
       <Routes>
            <Route  element ={<MainLayout/>}>
                <Route path='/' element ={<PersonalInfor/>}/>
                <Route path='/projects' element ={<Projects/>}/>
                <Route path='/skills' element ={<Skills/>}/>
            </Route>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
