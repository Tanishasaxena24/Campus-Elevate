import React from 'react'

import {NavLink} from 'react-router-dom'


function Library() {
  return (
    <div>
     {/* <div className='bg-[url("https://wallpapercave.com/wp/wp2060641.jpg")] h-screen w-full flex items-center justify-center  bg-green-300 bg-cover p-3 m-auto ' ></div> */}
     
    <div className=' flex p-2  items-center justify-center bg-[url("data:image/jpeg;base64,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")] h-screen w-full bg-contain '>
    <NavLink to='/request'>
    <button type="button" className="mr-20 bg-gradient-to-r h-64 w-64 from-green-400 to-blue-500   p-20 rounded-lg text-black font-bold text-[25px] border-4">
  GENERATE ISSUE REQUEST
</button>
    </NavLink>
    <NavLink to='/status'>
    <button type="button" className="bg-gradient-to-r h-64 w-64 from-green-400 to-blue-500  p-20 rounded-lg text-black font-bold text-[25px] border-4">
  VIEW STATUS
</button>
    </NavLink>
    </div>
    </div>
  )
}

export default Library