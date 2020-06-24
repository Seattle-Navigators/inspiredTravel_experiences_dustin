import React from 'react';
import PropTypes from 'prop-types';

const QuickViewRating = ({ rating, reviewCount, supplier }) => (
  <div className="QuickViewColumn">
    <div className="QuickViewRating">
      <span className="QuickViewBubbleRating">{rating}</span>
      <span className="QuickViewReviewCount">{reviewCount}</span>
    </div>
    <div className="QuickViewSupplier">
      By:
      {' '}
      <span><a href="" target="_blank" className="SupplierName">{supplier}</a></span>  {/* eslint-disable-line */}
    </div>
  </div>
);

QuickViewRating.propTypes = {
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  supplier: PropTypes.string.isRequired,
};

export default QuickViewRating;