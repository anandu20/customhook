import useCustomhook from './useCustomhook'
import './App.scss'
function App() {
const{val,increment,decrement}=useCustomhook(0)
  return (
    <>
     <div className="container">
     <button onClick={increment}>+</button>
     <span>{val}</span>
     <button onClick={decrement}>-</button>
     </div>
    </>
  )
}
export default App
