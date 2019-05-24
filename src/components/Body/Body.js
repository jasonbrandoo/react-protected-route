import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ navbar, sidebar, content }) => (
  <>
    {navbar}
    {sidebar}
    {content}
  </>
);

Body.propTypes = {
  navbar: PropTypes.object.isRequired,
  sidebar: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
};

export default Body;
