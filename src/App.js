import React, { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [data, setData] = useState({});


  // const getdata = async () => {
  //   const comingdata = await axios.get("https://dummyjson.com/users")
  //   console.log(comingdata.data.users);
  // }

  console.log(data);

  const postdata = () => {
    const senddata = axios.post("https://jsonplaceholder.typicode.com/users", data)

      .then((res) => {
        console.log("Okay", res);

        
      })
      .catch((err) => {
        console.log("Error", err);
      })
  }







  return (<>
    <div className='p-5 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col space-y-7  items-center'>
      <div>
        <p className=' font-semibold text-sky-500 text-3xl'  >Resgistation Form</p>
      </div>
      <input className='p-3 rounded-lg focus:outline-none placeholder:text-slate-400 w-full border border-slate-300  focus:shadow-lg focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'  placeholder='Name' name='name' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} ></input>
      <input className='p-3 rounded-lg focus:outline-none placeholder:text-slate-400 w-full border border-slate-300  focus:shadow-lg focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'    placeholder='UserName' name='userName' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} ></input>
      <input className='p-3 rounded-lg focus:outline-none placeholder:text-slate-400 w-full border border-slate-300  focus:shadow-lg focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'   placeholder='Email' name='email' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} ></input>
      <input className='p-3 rounded-lg focus:outline-none placeholder:text-slate-400 w-full border border-slate-300  focus:shadow-lg focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'     placeholder='Password' name='password' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} ></input>
      <input className='p-3 rounded-lg focus:outline-none placeholder:text-slate-400 w-full border border-slate-300  focus:shadow-lg focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'     placeholder='Address' name='address' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} ></input>
      <input className='p-3 rounded-lg focus:outline-none placeholder:text-slate-400 w-full border border-slate-300  focus:shadow-lg focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'     placeholder='Phone Number' name='phoneNumber' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} ></input>
      <input className='p-3 rounded-lg focus:outline-none placeholder:text-slate-400 w-full border border-slate-300  focus:shadow-lg focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'     placeholder='City' name='city' onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} ></input>
    <button  className="p-3 rounded-lg focus:outline-none text-slate-800 border border-sky-200 hover:text-sky-500 hover:shadow-lg  shadow-sm   bg-white  hover:border-sky-500" onClick={postdata} >Post Data</button>
    </div>
    {/* <button onClick={getdata} >GEt Data</button> */}

  </>
  )
}

export default App

