import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const BackLink = ({ to }) => {
  let pathname = to;
  if (typeof to === 'object') pathname = `${to.pathname}${to.search}`;

  const navigate = useNavigate();
  const handleClick = () => navigate(pathname);

  return <button onClick={handleClick}>Powrót</button>;
};

BackLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
