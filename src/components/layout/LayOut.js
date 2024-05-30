import PropTypes from 'prop-types';
import Header from './header/Header';
import Footer from './footer/Footer';
import TopButton from 'components/button/TopButton';

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <TopButton />

      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
