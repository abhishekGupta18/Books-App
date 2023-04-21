import { useBooksContext } from "../Context/BooksContext";
export const UserProfile = () => {
  const { booksList } = useBooksContext();
  const { user } = booksList;
  return (
    <>
      <h1>Profile</h1>
      <img src={user?.img} width="350px" height="250px" alt={user?.name} />
      <p>
        <strong>Name: </strong>
        {user?.name}
      </p>
      <p>
        <strong>Bio: </strong>
        {user?.bio}
      </p>
      <p>
        <strong>"Paisa Hi Paisa Hoga"</strong>
      </p>
    </>
  );
};
