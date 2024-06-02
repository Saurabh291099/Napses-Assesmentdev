import './App.css'
import './index.css'
import Sidebar from './Components/Sidebar'
import Main from './Components/Main'
import Leftsidebar from './Components/Leftsidebar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>

        <Sidebar />
        <Main />
        <Leftsidebar />

      </div>
    </>
  )
}

export default App
