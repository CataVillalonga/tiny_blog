import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import {blogData} from './mockdata'
import {BlogPostData} from './Types';
import './styles/App.css'

const App =() => {

  const [data, setData] = useState<BlogPostData[]>([{
    id: 0,
    title: '',
    body: '',
    tags: [''],
    reactions: 0
  }])
  
  useEffect(() => {
    setData(blogData.posts)
  },[])
  
  return (
    <>
    <Header />
    <Main data={data}/>
    <Footer />
    </>
  );
}

export default App;
