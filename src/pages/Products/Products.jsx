import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import { useState } from 'react';
import './Products.scss';

const Products = () => {
  const catId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState('');
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h3>Product caategories</h3>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="">Spectacles</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="">Sunglasses</label>
          </div>
        </div>
        <div className="filterItem">
          <h3>Filter by Price</h3>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h3>Sort by</h3>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort('asc')}
            />
            <label htmlFor="asc">Price(Lowest)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort('desc')}
            />
            <label htmlFor="">Price(highest)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://plus.unsplash.com/premium_photo-1692809752278-43df89f0c1bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHNwZWN0YWNsZXN8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
