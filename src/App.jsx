import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductItem from './component/ProductItem.jsx'
import Cut from './component/cut.jsx'
import UserCard from './component/usercard.jsx'

function App() {
  const [name, setName] = useState("Riski")
  const [username, setUsername] = useState("")
  const [data, setData] = useState({
    nama : "",
    umur : 0
  })

  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <>
    <input name='nama' value={data.nama} className='border' onChange={(e) => setData({...data,nama :e.target.value})}  />
    {data.nama}
    <button onClick={() => setName("A")}>{name}</button>

        <div className='flex justify-center flex-col items-center mt-4'>
            <h1 className="text-3xl font-bold mb-4">Daftar Produk</h1>
            <ProductItem />
            <Cut cut="Test test"/>
            <UserCard name="Olil"/>
        </div>
        
      <form>
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="age"
        type="number"
        value={user.age}
        onChange={handleChange}
        placeholder="Age"
      />
    </form>
    {user.name}
    {user.age}
    {user.email}
    </>
  )
}

export default App
