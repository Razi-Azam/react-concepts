import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const userData = useLoaderData()
    // const [userData, setUserData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Razi-Azam')
    //     .then(res => res.json())
    //     .then(data => setUserData(data))

    // }, [])

  return (
    <div className='flex flex-row justify-center items-center p-4'>
        <div>
            <img src={userData.avatar_url} className='rounded-full' alt="Github profile picture" width={250} />
        </div>
        <div className=' text-black text-left m-4 p-4 text-xl w-3/4'>
            <h2>Name : <span className='text-purple-800'>{userData.name}</span></h2>
            <p>Place : <span className='text-purple-800'>{userData.location}</span></p>
             <p>Followers : <span className='text-purple-800'>{userData.followers}</span></p> 
             <p>Total Github Public Repos : <span className='text-purple-800'>{userData.public_repos}</span></p>
             <p>Bio : <span className='text-purple-800'>{userData.bio}</span></p>
            <Link
            className="inline-flex text-white items-center px-6 py-2 font-medium bg-gray-700 rounded-lg hover:bg-purple-700 mt-3"
            to={userData.html_url}
            target="_blank"
            >
             View Profile
            </Link>       
        </div>
    </div>
  )
}

export default Github


//optimzed version of fetching data
export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/Razi-Azam')
    return response.json()
}

