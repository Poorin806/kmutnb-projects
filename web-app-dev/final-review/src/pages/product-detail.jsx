import React from "react";
import PropTypes from "prop-types";

export default function ProductDetailPage({ momMessage }) {
  return (
    <div>
      <h3>This is a product detail.</h3>

      {momMessage && <p>Mom message: {momMessage}</p>}
    </div>
  );
}

ProductDetailPage.propTypes = {
  momMessage: PropTypes.string,
};
