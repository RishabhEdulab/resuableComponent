import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputFiled from './component/InputFiled'
import Button from './component/Button'
function App() {
  const [inputValue,setInputValue]=React.useState<string>("")
  console.log(inputValue)
  const inputhandler=()=>{
    console.log("button is click")
  }
  return (
    <div className="App">
        <h1 className="m-7 capitalize">
    Hello world!
  </h1>
      <InputFiled type="text" value={inputValue} setInputValue={setInputValue} style={{color:"black"}}  placeholder="Enter a name" className='p-2 bg-yellow-500 border-solid border-radius rounded focus:outline-none' />

    <Button label="Submit" onClick={inputhandler} 
    className='hover:bg-yellow-700 text-blue-600 bg-amber-800 p-3 w-1/4 mt-2'  />
      <Button type='submit' style={{color:"red",margin:"10px"}} label='login' 
      />
    </div>
  );
}



export default App;
