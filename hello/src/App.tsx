import { useState } from 'react'
import './App.css'

function App() {
  const msg: string = "Hello Rafiul";
  const a: number = 5;
  const b: number = 6;
  let sum: number = a + b
  const arr: string[] = ["Hello world", "Finish him", "Garden Garden"];
  let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];

  if (sum > 50) {
    console.log("Greater")
  }
  else {
    console.log("Beeeeeeh!")
  }
  for (let i: number = 10; i > 0; i--) {
    if (sum > 10) {
      console.log("Hello world", sum);
      sum--;
    } else {
      console.log("Destroy world",sum)
      sum++;
    }
  }
  return (
    <>
      <h1>{msg}</h1>
      <h2>{sum}</h2>
      {
        fruits.map((item) => {
          return (
            <h1>{item}</h1>
          )
        })
      }
      {
        arr.map((item) => {
          return (
            <h2>{item}</h2>
          )
        })
      }
      {/* condition */}
      {
        sum > 50 ? <h1>Greater</h1> : <h3>Lesser</h3>
      }
    </>
  )
}

export default App
