import { TrendingToday } from 'components/TrendingToday/TrendingToday';
import scss from './HomePage.module.scss';

const HomePage = () => (
  <div className={scss.homepage}>
    <TrendingToday />
  </div>
);
export default HomePage;