import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

/* Main Compoent */
const Section = (props) => {
  const { className, children } = props;

  /* Renderer */
  return <section className={className}>{children}</section>;
};

/* Main Component Settings */
Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const StyledSection = styled(Section)`
  height: 100%;
  width: 100%;
`;

export default StyledSection;
