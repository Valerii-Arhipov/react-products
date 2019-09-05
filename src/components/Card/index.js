import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './index.css';

function areEqual(prevProps, nextProps) {
  return prevProps.product.votes === nextProps.product.votes;
}

function Card({
  changeVote, product: {
    id,
    title,
    description,
    votes,
    submitterAvatarUrl,
    productImageUrl,
  },
}) {
  return (
    <div className="card">
      <img src={productImageUrl} className="card__photo" alt="product" />
      <div className="card__info-block">
        <div className="card__votes-block">
          <img
            aria-hidden="true"
            onClick={() => changeVote(id)}
            className="card_arrow"
            src="images/ui/arrow.png"
            alt="arrow"
          />
          <p className="card__text card__text--count">{votes}</p>
        </div>
        <p className="card__text card__text--title">{title}</p>
        <p className="card__text">{description}</p>
        <div className="card__votes-block">
          <p className="card__text card__text--submitted">Submitted by:</p>
          <img src={submitterAvatarUrl} className="card__avatar" alt="avatar" />
        </div>

      </div>
    </div>
  );
}

Card.propTypes = {
  changeVote: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    votes: PropTypes.number,
    submitterAvatarUrl: PropTypes.string,
    productImageUrl: PropTypes.string,

  }).isRequired,
};

export default memo(Card, areEqual);
