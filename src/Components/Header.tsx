import '../styles/Header.css'


const Header = () => {
  const categories = ['Crime','Love', 'Classic', 'Mystery', 'Fiction']
  return (
    <header className="header-section">
      <li className="header-section-links">
        {categories.map( (category, i) => {
          return (
            <ul key={i}>{category}</ul>
          )
        })}
      </li>
      <h1 className="header-section-title">My beautifull Blog</h1>
    </header>
  )
}

export default Header