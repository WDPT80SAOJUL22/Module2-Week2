import React, { useState } from 'react'
import data from '../data/data.json'
import BlogCard from './BlogCard'
import CreateBlog from './CreateBlog'

const BlogList = () => {
  
  const [blogs, setBlogs] = useState(data)
  const [showForm, setShowForm] = useState(false)
  const [filteredBlogs, setFilteredBlogs] = useState(data)

  const removeBlog = (id) => {
    // const updatedBlog = blogs.map(blog => blog) // copy
    // const updatedBlog = [...blogs] // spread operator // cria um copia do array
    const updatedBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(updatedBlogs)
}

  const addBlog = (newBlog) => {
    const lastId = blogs[blogs.length - 1].id
    newBlog.id = lastId + 1
    const updatedBlog = [...blogs] // spread operator // cria um copia do array
    updatedBlog.push(newBlog)
    // const updatedBlog = [...blogs, newBlog]
    setBlogs(updatedBlog)
    setShowForm(false)
  }

  const filterBlogsList = (str) => {
    console.log(str);
    if (str === '') {
        setFilteredBlogs([...blogs])
    }else {
        const filteredList = blogs.filter(blog => blog.title.toLowerCase().includes(str.toLowerCase()) || blog.body.includes(str))
        setFilteredBlogs(filteredList)
    }
  }



  return (
    <div className='blog-list'>
        <button onClick={ () => {setShowForm(!showForm)}}>
            {showForm ? 'Hide Form' : 'Create New Blog'}
        </button>

        {showForm && <CreateBlog addBlog={addBlog}/>}

        <input
            placeholder='Search'
            onChange={(e)=>{
                filterBlogsList(e.target.value)
            }}
        />


        {filteredBlogs.map(blog => 
            <BlogCard 
                id={blog.id}
                author={blog.author} 
                body={blog.body} 
                title={blog.title}
                removeBlog={removeBlog}
            />
        )}
    </div>
  )
}

export default BlogList