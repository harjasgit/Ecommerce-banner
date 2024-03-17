import React, { useState } from 'react'
import productData from "../products.json"
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';
const title = (
  <h2>Hunt Down <span>The One That Fits</span>Your Needs From Our Extensive Catalog</h2>
)
const description= "Explore our vast selection, the largest compilation of products you'll find"
const bannerList = [
  {
  iconName: "icofont-users-alt-4",
  text: "1.5 Million Customers",
  },
  {
  iconName: "icofont-notification",
  text: "More then 2000 Marchent",
  },
  {
  iconName: "icofont-globe",
  text: "Buy Anything Online",
  },
  ];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

     const handleSearch = e =>{
     const searchTerm = e.target.value;
     setSearchInput(searchTerm);
      
    const filtered = productData.filter((product)=>product.name.toLowerCase().includes(searchTerm.toLowerCase()));
     setFilteredProducts(filtered) 

     } 

  return <div className='banner-section style-4'>
      <div className='container'>
        <div className='banner-content'>
            {title}
            <form>
              <SelectedCategory select={"all"}/>
              <input type="text" none="" id="search" placeholder="Search your product" value=
              {searchInput} onChange={handleSearch}/>
              <button type="submit">
              <i className="icofont-search"></i>
              </button>
            </form>
            <p>{description}</p>
            <ul className='lab-ul'>
             {
                searchInput && filteredProducts.map((product, i)=> <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>)
             }
            </ul>
        </div>
      </div>
    </div>
}

export default Banner