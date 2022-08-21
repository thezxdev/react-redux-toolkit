import { useDispatch, useSelector } from 'react-redux';
import reactLogo from './assets/react.svg'
import './App.css'
import { decrement, increment, incrementBy } from './store/slices/counter';

function App() {
  
  // Obtener valor de nuestro state
  const { counter } = useSelector( state => state.counter );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>count is: { counter }</p>
      <div className="card">
        <button onClick={ () => dispatch( increment() ) }>
          Increment
        </button>
        <button onClick={ () => dispatch( decrement() ) }>
          Decrement
        </button>
        <button onClick={ () => dispatch( incrementBy( 2 ) ) }>
          IncrementBy2
        </button>
      </div>
    </div>
  )
}

export default App;

// yarn add @reduxjs/toolkit react-redux
