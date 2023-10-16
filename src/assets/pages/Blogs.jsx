import React from 'react'
import PageBanner from '../components/PageBanner'
import { useLoaderData } from 'react-router-dom'
import Blog from './Blog'

const Blogs = () => {

  const blogs=useLoaderData()

   console.log(blogs)
  
  return (
    <div>
      <PageBanner title='Our Blog'></PageBanner>

      <div className='container mx-auto px-6 my-10'>
     <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {
          blogs.map(blog=> <Blog key={blog.id} blog={blog}> </Blog>)
        }
        
    </div>
   </div>
    </div>
  )
}
export default Blogs