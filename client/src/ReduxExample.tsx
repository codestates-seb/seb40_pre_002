import { useAppDispatch, useAppSelector } from './redux/store/store';
import { decrement, increment, incrementByAmount } from './redux/slices/counterSlice';


function ReduxExample() {

  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const handlePlus = () => dispatch(increment())
  const handleMinu = () => dispatch(decrement())
  const handlePayload = () => dispatch(incrementByAmount(5))

  return (
    <div className="App">

      <button onClick={handlePlus}>plus</button>
      <button onClick={handleMinu}>minus</button>
      <button onClick={handlePayload}>number</button>

      <div>{count}</div>

    </div>
  );
}

export default ReduxExample;
