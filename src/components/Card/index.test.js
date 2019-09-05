import React from 'react';
import renderer from 'react-test-renderer';
import Card from './index';

const testProduct = {
  id: 1,
  title: 'Yellow Pail',
  description: 'On-demand sand castle construction expertise.',
  url: '#',
  votes: 40,
  submitterAvatarUrl: 'images/avatars/daniel.jpg',
  productImageUrl: 'images/products/image-aqua.png',
};

test('renders correctly', () => {
  const tree = renderer
    .create(<Card product={testProduct} changeVote={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
