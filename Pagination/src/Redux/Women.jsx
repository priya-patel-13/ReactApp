import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../Feature/Slice';
import { Link } from 'react-router-dom';

export default function Women() {

    const dispatch = useDispatch();
    const [showLoginForm, setShowLoginForm] = useState(false);


    useEffect(() => {
        dispatch(fetchApi());
    }, [])

    const Record = useSelector((state) => state.apiKey?.data || []);

    const newRecord = Record.filter((el) => el.category === "women's clothing")

    const handleLoginClick = () => {
      setShowLoginForm(!showLoginForm);
    };
  
    return (
        <>
         
         <div className="nav flex">
        <img src="https://cmsimages.shoppersstop.com/shoppersstopthree_1eb72c5b77/shoppersstopthree_1eb72c5b77.png" className="h-[26px] mt-5 ml-10" alt="" />

        <form className="search-container">
          <input  type="text"  id="search-bar" placeholder="What can I help you with today?" />
          <a href="#">
            <img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"  alt="search-icon"/>
          </a>
        </form>

        <button onClick={handleLoginClick} className="mt-3 btn border hover:border-[#008ABF]">
          {showLoginForm ? "Close Login" : "Log In"}
        </button>
      </div>

      {showLoginForm && (
        <div className="login-form">
          <form className="flex flex-col items-center p-5 border mt-5 w-1/3 mx-auto bg-gray-100 rounded shadow">
            <h2 className="font-bold mb-4">Login</h2>
            <input type="text" placeholder="Username" className="p-2 mb-3 border rounded w-full" />
            <input type="password" placeholder="Password" className="p-2 mb-3 border rounded w-full" />
            <button type="submit" className="btn bg-blue-500 text-white px-4 py-2">
              Submit
            </button>
          </form>
        </div>
      )}
         <div className='flex justify-evenly mt-6'>
          <button className='border hover:border-[#008ABF]'><Link to={"/"}>Home</Link></button>
          <button className='border hover:border-[#008ABF]'><Link to={"/women"}>Women's</Link></button>
          <button className=' border hover:border-[#008ABF]'><Link to={"/men"}>Men's</Link></button>
          <button className='border  hover:border-[#008ABF]'><Link to={"/elec"}>Electronic</Link></button>
          <button className='border hover:border-[#008ABF]'><Link to={"/jwellery"}>jewellary</Link></button>
         
        </div>
     <hr className='mt-5 border border-[#b0aeae]' />
       
        <br /><br /><br />
                <div className='flex'>
            {
                newRecord &&
                newRecord.map((e, i) => {
                    return <ul key={i} className=' h-[620px]' id='ul1'>
                    <li className=' h-[55px] text-center p-3 font-serif font-semibold'>{e.category}</li><hr className='border-2' />
                     <br /><br />
                      <center>
                      <img className='h-[250px] w-[230px]' src={e.image} alt="" />
          
                      </center>
          
                      <br />
                      <li className=' text-center m-2'> 
                        <button className='w-[170px] m-2 font-semibold' id='btn1'>
                          <small className=''>Price :</small>
                        {e.price}
                        </button>
                      </li>
                     
                              
                     <li className=' text-center '>   
                       <button className='w-[150px] m-2 font-semibold'  id='btn1'>
                        <small className=''>Rate :</small>
                       {e.rating.rate}
          
                       </button>
          
                       <button className='w-[150px] m-2 font-semibold'  id='btn1'>
                      
                       <small className=''>Count :</small>
                       {e.rating.count}
                          </button>
                       </li>
                            
                  </ul>
                })
            }
            </div>
<br />
        </>
    )
}
