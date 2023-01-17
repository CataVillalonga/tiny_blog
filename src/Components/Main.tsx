import { useState } from "react";
import {IBlogDataProps} from "../Types"
import Blogpost from "./Blogpost";
import arrowDown from '../Images/arrow-down.png';
import arrowUp from '../Images/arrow-down.png';
import '../styles/Main.css';

const Main =({data}:IBlogDataProps) => {

  const [categoryArrow, setCategoryArrow] = useState(<img className="intro-section-arrow"src={arrowDown} alt="dropdown arrow"/>)
  const categoryHandler = () => {
    console.log('div clicked')
  }

  return (
    <main>
      <section id="Crime" className="category-section" onClick={categoryHandler}>
        <div className="intro-section">
          <h1 className="intro-section-title">Crime</h1>
          {categoryArrow}
        </div>
        <section className="posts-section">
        {data.map(post =>{        
          const {tags} = post
          if(tags.includes('crime')) {
            return <Blogpost post={post}/>
          }
        })}
        </section>
      </section>
      <section id="Love"className="category-section">
        <div className="intro-section">
          <h1 className="intro-section-title">Love</h1>
          {categoryArrow}
        </div>
        <section className="posts-section">
        {data.map(post =>{        
          const {tags} = post
          if(tags.includes('love')) {
            return <Blogpost post={post}/>
          }
        })}
        </section>
      </section>
      <section id="Mystery" className="category-section">
        <div className="intro-section">
          <h1 className="intro-section-title">Mystery</h1>
          {categoryArrow}
        </div>
        <section className="posts-section">
        {data.map(post =>{        
          const {tags} = post
          if(tags.includes('mystery')) {
            return <Blogpost post={post}/>
          }
        })}
        </section>
      </section>
      <section id="Classic" className="category-section">
        <div className="intro-section">
          <h1 className="intro-section-title">Classic</h1>
          {categoryArrow}
        </div>
        <section className="posts-section">
        {data.map(post =>{        
          const {tags} = post
          if(tags.includes('classic')) {
            return <Blogpost post={post}/>
          }
        })}
        </section>
      </section>
      <section id="Fiction" className="category-section">
        <div className="intro-section">
          <h1 className="intro-section-title">Fiction</h1>
          {categoryArrow}
        </div>
        <section className="posts-section">
        {data.map(post =>{        
          const {tags} = post
          if(tags.includes('fiction')) {
            return <Blogpost post={post}/>
          }
        })}
        </section>
      </section>
    </main>
  )
}

export default Main