// import PropTypes from 'prop-types';
// import { Text } from './ContactList.styled';
import { ContactListItem } from './ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/usersSelector';
import { useDispatch } from 'react-redux';
import { deleteUser } from 'redux/userNameSlice';

export function ContactList() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  console.log(dispatch);
  console.log(users);
  return users.length > 0 ? (
    <ul>
      {users.map(el => {
        return (
          <ContactListItem
            key={el.id}
            name={el.name}
            number={el.number}
            onClick={() => dispatch(deleteUser(el.id))}
          />
        );
      })}
    </ul>
  ) : (
    <p>There is no contact</p>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   deleteContact: PropTypes.func,
// };
