import './App.css';

function App() {

  const handleClick = () => {
    alert("You pressed the button!")
  }

  return (
    <>
    <div>
      Test
    </div>
    <div>Test 2</div>
    <div className='text-center'>
    <button onClick={handleClick} className="btn btn-primary">Bootstrap Button</button>
    </div>
    </>
  );
}

export default App;
