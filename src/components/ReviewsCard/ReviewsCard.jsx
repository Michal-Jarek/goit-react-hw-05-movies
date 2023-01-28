

export const ReviewsCard = ({ array }) => {

  return (
    <ul>
      {array.map(({ author, content, id }) => (
        <li key={id}>
          <h2>Author: {author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
