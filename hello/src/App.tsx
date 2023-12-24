import { useState } from 'react'
import './App.css'
import Dummy from './components/Dummy';

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
  let numArr: NumberList = [1, 2, 3];
  console.log(numArr[0])

  interface Country {
    name: string;
    capital: string;
  }
  interface CountryList {
    [index: number]: Country;
  }
  let list: CountryList = [{ name: "Bangladesh", capital: "Dhaka" }, { name: "India", capital: "New Delhi" }]
  console.log(list)

  // optional property in interface
  interface IEmployee {
    empCode: number;
    empName: string;
    empDept?: string; // "?" this means optional operator
  }

  let empObj1: IEmployee = {   // OK
    empCode: 1,
    empName: "Steve"
  }

  let empObj2: IEmployee = {    // OK
    empCode: 1,
    empName: "Bill",
    empDept: "IT"
  }
  // Extending Interface
  interface Admin extends IEmployee {
    adminEmail: string;
    adminPassword: string;
  }
  let empObj3: Admin = {    // OK
    empCode: 0,
    empName: "admin",
    empDept: "admin team",
    adminEmail: "admin@gmail.com",
    adminPassword: "admin123456"
  }
  console.log(empObj3);

  // classs and constructor

  class Employee {

    empCode: number;
    empName: string;

    constructor(empcode: number, empName: string) {
      this.empCode = empcode;
      this.empName = empName;
    }

    greetings = () => {
      console.log("Hello", this.empName, ".Welcome to the company")
    }
  }
  const e1: Employee = new Employee(3239, "M Rafiul Faisal");
  e1.greetings();

  class Developer extends Employee {
    stake: string;

    constructor(empCode: number, empName: string,stake: string) {
      super(empCode,empName);
      this.stake = stake;
    }
  }
   const d1 = new Developer(7, "Sajib", "Angular")
   d1.greetings();
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

      {/* props in TS */}

      <Dummy/>
    </>
  )
}

export default App
