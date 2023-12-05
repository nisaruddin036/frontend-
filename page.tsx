"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.post('http://localhost:3001/createUsers')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);

useEffect(()=> {
  axios.get('http://localhost:3001/createUsers')
  .then(result => setUsers(result.data))
  .catch(err => console.log(err))
},[])


  return (
    <div className="p-5 bg-light">
      <div className="bg-white shadow border">
      <Link href="/create" className="bg-blue-400 hover:bg-blue-500 rounded-lg">+add</Link> 
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link href="/update" className="bg-blue-400 hover:bg-blue-500 rounded-lg">update</Link>
                  <button>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
