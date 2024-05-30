import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Section from './Section';

/* Main Compoent */
const Container = (props) => {
  const { className, children } = props;

  /* Renderer */
  return (
    <div className={className}>
      {children}
      <Section />
    </div>
  );
};

/* Main Component Settings */
Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const StyledContainer = styled(Container)`
  height: 100%;
  width: 100%;
`;

export default StyledContainer;
