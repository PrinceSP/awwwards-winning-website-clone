import { About, Hero, Navbar } from './components'

function App() {

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  )
}

export default App
