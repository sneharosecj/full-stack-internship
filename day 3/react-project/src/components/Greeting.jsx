import './greeting.css'
import reactLogo from '../assets/react.svg'
function Greeting({ formattedDate, name }) {

    const handleClick = () => {
        console.log("Button clicked!");}

  return (
    <div className="greeting-container">
      <h1 className="greeting-title">Welcome to Day 2 of Summer Internship program</h1>
      <p className="greeting-line">Today's date is {formattedDate}</p>
      <p className="greeting-line">Good Morning {name} — Message from...</p>
      <div className="action-buttons">
        <button className="btn btn-primary" onClick={handleClick}>
          Click Me!
        </button>
        <button className="btn btn-success" onClick={handleClick}>
          Say Hello
        </button>
        <button 
        onClick={() => alert("Hello")}
        className="px-5 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-emerald-600 active:scale-95 transition">Alert Me</button>
<img src={reactLogo} alt="React Logo"
className='w-16 h-16 rounded-full mx-auto mb-2' />
      </div>
    </div>
  )
}

export default Greeting
