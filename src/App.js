import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment} from './helpers/counterSlice'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='practice'>
      <h1 className='title'>This is a Redux test</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br></br>
      <span>{count}</span>
      <br/> 
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <br></br>

    </div>
  );
}

export default App;
