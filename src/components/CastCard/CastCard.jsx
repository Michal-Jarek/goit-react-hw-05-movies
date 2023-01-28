import scss from './CastCard.module.scss';

export const CastCard = ({ array }) => {
  return (
    <ul className={scss.cast_list}>
      {array.map(({ name, profile_path: path, character, id }) => {
        let src = '';
        if (path === null) src = 'https://picsum.photos/id/237/274/398';
        else src = `https://image.tmdb.org/t/p/w500${path}`;

        return (
          <li className={scss.cast_list__item} key={id}>
            <img src={src} alt={name} />
            <h4>{name}</h4>
            <span>Character: {character} </span>
          </li>
        );
      })}
    </ul>
  );
};
