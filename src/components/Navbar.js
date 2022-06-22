import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="product-filter">
        <h1>Products</h1>
        
        <div className="sort">
          <div className="collection-sort">
            <label>Filter by:</label>
            <select>
              <option value="/">All Jackets</option>
              <option value="/">2016</option>
              <option value="/">jacket</option>
              <option value="/">Jackets</option>
              <option value="/">layers</option>
              <option value="/">Obermeyer</option>
              <option value="/">Roxy</option>
              <option value="/">womens</option>
            </select>
          </div>
          
          <div className="collection-sort">
            <label>Sort by:</label>
            <select>
              <option value="/">Featured</option>
              <option value="/">Best Selling</option>
              <option value="/">Alphabetically, A-Z</option>
              <option value="/">Alphabetically, Z-A</option>
              <option value="/">Price, low to high</option>
              <option value="/">Price, high to low</option>
              <option value="/">Date, new to old</option>
              <option value="/">Date, old to new</option>
            </select>
          </div>
           <div className="collection-sort">
            <div>
              <Link to="/about" className="btn">Login </Link>
              <Link to="/register" className="btn">Register </Link>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Navbar;