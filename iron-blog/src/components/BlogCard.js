const BlogCard = (props) => {
  return (
    <div className="blog-preview">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        <p>Written by {props.author}</p>
        <button onClick={() => {props.removeBlog(props.id)}}>Delete</button>
    </div>
  )
}

export default BlogCard