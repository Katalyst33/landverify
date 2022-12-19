import InputArea from '../components/InputArea'
import MapArea from '../components/MapAreaComponent'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/counterSlice'


function MapPage() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="">
      <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
        <div>   <h1>Land Verify22</h1></div>

        <InputArea />

        <MapArea />
      </div>
    </div>
  )
}

export default MapPage

