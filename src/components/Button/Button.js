import React from 'react';
import PropTypes from 'prop-types';
import { Button as ContainedButton } from '@material-ui/core';

const Button = ({ className, type, color, text, variant, ...props }) => {
  return (
    <ContainedButton
      className={className}
      type={type}
      color={color}
      variant={variant}
      {...props}
    >
      {text}
    </ContainedButton>
  );
};

Button.defaultProps = {
  type: 'button',
  color: 'primary',
  text: 'text',
  className: '',
  variant: 'contained',
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
