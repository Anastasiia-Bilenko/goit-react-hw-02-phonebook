export const ContactList = ({ items, deleteCont }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <p>
            {item.name}:{item.number}
          </p>
          <button
            type="button"
            onClick={() => {
              deleteCont(item.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
