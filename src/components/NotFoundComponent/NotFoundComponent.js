import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const NotFoundComponent = ({ itemName, name, value }) => (
  <div className={classnames(itemName, 'not-found-component')}>
    <div>
        Failed to load component!
    </div>
    {(name && typeof value === 'string')
      ? <input type="hidden" name={name} value={value} />
      : null
    }
  </div>
);

NotFoundComponent.propTypes = {
  itemName: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.any,
};

export default NotFoundComponent;
