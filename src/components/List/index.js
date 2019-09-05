import React, { useState, useCallback, memo } from 'react';

import Card from '../Card';
import products from '../../assets/seed';
import './index.css';

const { products: MOCK_PRODUCTS } = products;

function List() {
  const [list, setList] = useState(MOCK_PRODUCTS);
  const changeVote = useCallback((id) => {
    setList(prevList => prevList.map((item) => {
      const currentItem = { ...item };
      if (currentItem.id === id) {
        currentItem.votes += 1;
      }
      return currentItem;
    }));
  }, []);

  return (
    <div className="container">
      <p className="title">Popular Products</p>
      { list
        .sort((a, b) => b.votes - a.votes)
        .map(item => <Card product={item} key={item.id} changeVote={changeVote} />)
      }
    </div>
  );
}

export default memo(List);
