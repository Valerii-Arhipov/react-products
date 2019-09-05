import React from 'react';
import renderer from 'react-test-renderer';

import List from './index';
import Card from '../Card';
import products from '../../assets/seed';

const { products: MOCK_PRODUCTS } = products;

test('List ', () => {
  const component = renderer.create(
    <List />,
  );
  let tree = component.toJSON();
  expect(tree.children[0].children[0]).toEqual('Popular Products');
  expect(component.root.findAllByType(Card).length).toEqual(MOCK_PRODUCTS.length);
});
