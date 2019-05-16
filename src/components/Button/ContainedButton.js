import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const ContainedButton = ({
  className,
  type,
  color,
  text,
  variant,
  ...props
}) => {
  return (
    <Button
      className={className}
      type={type}
      color={color}
      variant={variant}
      {...props}
    >
      {text}
    </Button>
  );
};

ContainedButton.defaultProps = {
  type: 'button',
  color: 'primary',
  text: 'text',
  className: '',
  variant: 'contained',
};

ContainedButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.string,
};

export default ContainedButton;
