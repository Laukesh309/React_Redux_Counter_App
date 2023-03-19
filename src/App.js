import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  Increment,
  Decrement,
  AddCounter,
  DeleteCounter
} from './Action';

function App() {
  const stateValue = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => {
        dispatch(AddCounter())
      }}>AddCounter</button>
      {
        stateValue.map((item, index) => {
          return <div>
            <h1>{item.InitialState}</h1>
            <button onClick={() => {
              dispatch(Increment(index))
            }}>Increament</button>
            <button onClick={() => {
              dispatch(Decrement(index))
            }}>Decrement</button>
            <button onClick={() => {
              dispatch(DeleteCounter(index))
            }}>DeleteCounter</button>
          </div>
        })
      }

    </div>
  );
}

export default App;
