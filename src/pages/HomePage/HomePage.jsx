import { TrendingToday } from 'components/TrendingToday/TrendingToday';
import scss from './HomePage.module.scss';

export const HomePage = () => (
  <div className={scss.homepage}>
    <TrendingToday />
  </div>
);
