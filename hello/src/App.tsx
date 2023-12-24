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
  for (let i: number = 5; i > 0; i--) {
    if (sum > 10) {
      console.log("Hello world", sum);
      sum--;
    } else {
      console.log("Destroy world", sum)
      sum++;
    }
  }
  //arrow function using typescript
  const subT = (x: number, y: number) => {
    if (x > y) {
      return (x - y);
    } else {
      return (y - x);
    }
  }
  for (let i: number = 5; i > 0; i--) {
    console.log("sub", subT(20, i));
  }

  // Interface

  interface User {
    uId: number;
    uName: string;
  }
  let user1: User = { uId: 1, uName: "Rafiul" }
  console.log(user1);
  let user2: User = { uId: 2, uName: "Fahim" }
  console.log(user2);

  let user3: User = { uId: 3, uName: "Faisal" }
  console.log(user3);
  //interface for arrays
  interface NumberList {
    [index: number]: number
  }
  let numArr:  NumberList = [1, 2, 3];
  console.log(numArr[0]) 


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
