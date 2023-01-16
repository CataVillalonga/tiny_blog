import {IPostProps } from "../Types";
import '../styles/Blogpost.css';


const Blogpost =({post}:IPostProps) => {
  console.log(post)
  return (
    <article key={post.id} className='post-details'>
      <h1 className='post-details-title'>{post.title}</h1>
      <p className='post-details-description'>{post.body}</p>
      <>
      <li key={`${post.title}`} className='post-details-tags'>
        {post.tags.map( (tag, i) => {
          return(
            <ul key={`list-item${i}`}><a href="http:/google.com/"> {`#${tag}`}</a></ul>
          )
        })}
      </li>
      </>
    </article>
  )
}

export default Blogpost