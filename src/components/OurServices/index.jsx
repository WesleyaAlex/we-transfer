import React from 'react';

import PropTypes from 'prop-types';

export function OurServices(props) {
  const {
    title,
    imageSrc,
    alt,
    key,
  } = props;

  return (
    <div data-testid="our-services" className="flex items-center justify-center" key={ key }>
      <div className="flex-row items-center justify-center">
        {
          imageSrc
          && <img className="flex h-56 w-56 rounded-full object-cover" src={ imageSrc } alt={ alt } />
        }
        <div className="items-center justify-center text-center">
          <h3 className="text-2xl">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

OurServices.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
}
