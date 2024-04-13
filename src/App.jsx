// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import DeveloperComponent from './components/DeveloperComponent.jsx'

function App() {
  const developers = [
      {
        id: 1,
        name: 'Marko',
        role: 'Backend Developer',
        birthday: new Date(2000, 9, 1),
      },

      {
        id: 2,
        name: 'Angela',
        role: 'Frontend Developer',
        birthday: new Date(1990, 6, 20),
      },

      {
        id: 3,
        name: 'Frosina',
        role: 'Backend Developer',
        birthday: new Date(1995, 10, 10),
      },

      {
        id: 4,
        name: 'Bojan',
        role: 'Backend Developer',
        birthday: new Date(1985, 11, 21),
      },
  ]

  return (
    <div>
      <DeveloperComponent name = {developers[0].name}
                          role = {developers[0].role}
                          birthday = {developers[0].birthday}/>

      <DeveloperComponent name = {developers[1].name}
                          role = {developers[1].role}
                          birthday = {developers[1].birthday}/>

      <DeveloperComponent name = {developers[2].name}
                          role = {developers[2].role}
                          birthday = {developers[2].birthday}/>

      <DeveloperComponent name = {developers[3].name}
                          role = {developers[3].role}
                          birthday = {developers[3].birthday}/>
    </div>
  )
}

export default App
