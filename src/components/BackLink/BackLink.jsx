import { useNavigate } from 'react-router-dom';

export const BackLink = ({ to }) => {
  let pathname = to;
  if (typeof to === 'object') pathname = to.pathname;

  const navigate = useNavigate();
  const handleClick = () => navigate({ pathname });

  return <button onClick={handleClick}>Powrót</button>;
};
