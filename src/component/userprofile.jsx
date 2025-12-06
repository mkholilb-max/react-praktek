import { useState } from "react";

export default function UserProfileAlert (){
    const [user, setUser] = useState({
    username : "",
    password : "",
    description : ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
        ...prev,
        [name]: value
    }));
};

  const handleClick = (e) => {
    alert(`username : ${user.username} password : ${user.password} description : ${user.description}`)
  }
  
  return (
    <form className='flex flex-col justify-start text-left'>
      <label className='text-[20px] font-bold'>username</label>
      <input value={user.username} onChange={handleChange} type="text" className='w-[200px] border rounded-t-[5px] rounded-b-sm' name='username' />
      <label className='text-[20px] font-bold'>password</label>
      <input value={user.password} onChange={handleChange} type="password" name='password' className='w-[200px] border rounded-t-[5px] rounded-b-sm' />
      <label className='text-[20px] font-bold'>description</label>
      <textarea value={user.description} onChange={handleChange} name='description' className='border w-[300px] h-[200px]' />
      <button onClick={handleClick} className='border w-[60px] m-3'>Submit</button>
    </form>
  )
}