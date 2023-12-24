import React, { FC, useEffect, useState } from 'react'


function Dummy() {
    interface Employee{
        name: string;
        salary: number;
    }
    const [employee, setEmployee] = useState<Employee>()

    useEffect(() => {
        setEmployee({name:"M Rafiul Faisal",salary:5000})
        console.log(employee)
    }, [])
    
  return (
    <div>
        <div>{employee?.name}</div>
        <div>{employee?.salary}</div>
    </div>
  )
}

export default Dummy