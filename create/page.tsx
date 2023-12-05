"use client"
import React, { useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {useForm} from 'react-hook-form'


function Create ()  {
    
const { register, trigger, formState: { errors } } = useForm();
const [inputData, setInputData] = useState ({ 
    id: '', 
    name: '',
    age: '',
    email: '',
   });
//const [name, setName] = useState("")
//const [email, setEmail] = useState("")
//const [age, setAge] = useState("")
const router = useRouter()

const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUsers",inputData)
    .then(result => {
        console.log(result)
        router.push('/.')
    })
    .catch(err => console.log(err))
}

  return (


   <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className='d-flex w-100 vh-100 justify-contect-center align-items-center'>
    <div className='w-50 border bg-light p-5'>
     <h2 className='text-center mb-4'>Add a user</h2>
     <form onSubmit={handleSubmit} className='bg-white rounded p-4 w-120 shadow-md'>
        <div className='form-group mb-3 p-2'>
          <label htmlFor='name' className="text-sm font-medium text-gray-700">name</label>
          <input
          type='text'
          className={`w-full border rounded p-2 ${errors.name && errors.name.type === "required" ? "border-red-500" : "border-gray-300"}`}
          placeholder='enter name'
          {...register("name", { required: true })}
          value={inputData.name}
          onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
           onBlur={() => trigger("name")}/>
           {errors.name && errors.name.type === "required" && <p className='text-red-500 text-sm'>Please enter the name</p>}
        </div>
        <div className='form-group mb-3 p-2'>
        <label htmlFor='age' className="text-sm font-medium text-gray-700">age</label>
        <input
          type='number'
          className={`w-full border rounded p-2 ${errors.age && errors.age.type === "required" ? "border-red-500" : "border-gray-300"}`}
          placeholder='enter age'
          value={inputData.age}
          {...register("age", { required: true })}
          onChange={(e) => setInputData({ ...inputData, age: e.target.value })}
           onBlur={() => trigger("age")}/>
           {errors.age && errors.age.type === "required" && <p className='text-red-500 text-sm'>Please enter the age</p>}
        </div>
        <div className='form-group mb-3 p-2'>
        <label htmlFor='email' className="text-sm font-medium text-gray-700">email</label>
        <input
          type='email'
          className={`w-full border rounded p-2 ${errors.email && errors.email.type === "required" ? "border-red-500" : "border-gray-300"}`}
          placeholder='enter email'
          value={inputData.email}
          {...register("email", { required: true })}
          onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
           onBlur={() => trigger("email")}/>
           {errors.email && errors.email.type === "required" && <p className='text-red-500 text-sm'>Please enter the email</p>}
        </div>    
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 rounded-lg px-6 py-3">new contact</button>
     </form>
    </div>
   </div>
</main>
  )
}

export default Create