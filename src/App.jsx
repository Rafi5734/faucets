// import { useState } from 'react'

import './App.css'
import Footer from './Components/Footer'
import MainBody from './Components/MainBody'
import MainNavbar from './Components/MainNavbar'
import Notice from './Components/Notice'

function App() {

  return (
    <main>
      <div>
        <MainNavbar />
        <Notice />
        <MainBody />
        <Footer/>
      </div>
    </main>
  )
}

export default App
