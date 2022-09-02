import React, {useState} from 'react'

const CreateBlog = (props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')

    const handleSubmit = (e) => {
        e.preventDefault()
        // const newBlog = {
        //     title: title, 
        //     body: body, 
        //     author: author
        // }
        if(title.length < 5){
            alert('Muito pequeno o titulo')
        }
        else{
            const newBlog = {title, body, author}
            props.addBlog(newBlog)
        }
    }

  return (
    <div className='create'>
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <input
                type='text'
                required
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
            />
            <label>Blog Body:</label>
            <textarea
                type='text'
                required
                value={body}
                onChange={(e) => {setBody(e.target.value)}}
            ></textarea>
            <label>Blog author:</label>
            <select
                required
                value={author}
                onChange={(e) => {setAuthor(e.target.value)}}
            >
                <option>mario</option>
                <option>yoshi</option>
            </select>
            <button>Add Blog</button>
        </form>
    </div>
  )
}

export default CreateBlog