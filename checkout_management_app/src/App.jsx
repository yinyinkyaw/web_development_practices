import './App.css'
import { QueueContextProvider } from './utils/context'
import { Toaster } from 'react-hot-toast'
import MainPage from './components/MainPage'

function App() {

  return (
    <QueueContextProvider>
      <MainPage />
      <div><Toaster /></div>
    </QueueContextProvider>
  )
}

export default App
