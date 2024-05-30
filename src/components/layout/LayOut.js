import PropTypes from 'prop-types';
import Footer from './footer/Footer';
import TopButton from 'components/button/TopButton';
import Header from './header/Header';

const LayOut = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <TopButton />

      <Footer />
    </>
  );
};

LayOut.propTypes = {
  children: PropTypes.node,
};

export default LayOut;
