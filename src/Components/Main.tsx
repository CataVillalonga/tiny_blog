import {IBlogDataProps} from "../Types"
import '../styles/Main.css';
import Blogpost from "./Blogpost";

const Main =({data}:IBlogDataProps) => {

  const categoryChecker =(tag: { map: () => string; }) =>{
    tag.map()

  }

  return (
    <main>
      <section className="category-section">
        <h1 className="category-section-title">Crime</h1>
        <section key='crime' className="posts-section">
        {data.map(post =>{        
          const {tags} = post
          if(tags.includes('crime')) {
            return <Blogpost post={post}/>
          }
        })}
        </section>
      </section>
    </main>
  )
}

export default Main