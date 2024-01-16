import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friedns from './Friends'

function App() {

  function handleClicked(){
    alert('button clicked')
  }
  const handleClicked2 = () =>{
    alert('Clicked Me')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Core Concepts part 2</h1>

    <Friedns></Friedns>

      <Users></Users>

      <Team></Team>


    <Counter></Counter>

      <button onClick={handleClicked}>Clicked Me</button>
      <button onClick={handleClicked2}>Click Two</button>
      <button onClick={() => { (alert('Clicked Third')) }}>Clicked Third</button>
      {/* Vejailla */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
