import PropTypes from 'prop-types';

const Wrapper = ({ children, css }) => {
  return <div className={`container mx-auto ${css || ''}`}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node,
  css: PropTypes.string,
};

export default Wrapper;
