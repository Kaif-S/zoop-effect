import './App.css';
import AnimatedItem from './components/AnimatedItem';



function App() {


  return (
    <>
    <div className=' bg-lime-400 h-screen flex justify-center items-center'>
      <ul className='flex justify-center gap-2 flex-col'>
        <AnimatedItem text={"instagram"}/>
        <AnimatedItem text={"facebook"}/>
        <AnimatedItem text={"Twitter"}/>
        <AnimatedItem text={"snapchat"}/>
      </ul>
    </div>
    </>
  )
}

export default App
