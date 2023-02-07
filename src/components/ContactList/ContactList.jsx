// import PropTypes from 'prop-types';
// import { Text } from './ContactList.styled';
import { ContactListItem } from './ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectFilter, selectUsers } from 'redux/usersSelector';
import { useDispatch } from 'react-redux';
import { deleteUser } from 'redux/userNameSlice';
import { useMemo } from 'react';

export function ContactList() {
  const contacts = useSelector(selectUsers);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filterNormalize = filter => filter.toLowerCase();

  const contactListToDisplay = useMemo(
    () =>
      contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterNormalize(filter))
      ),
    [contacts, filter]
  );

  return contacts.length > 0 ? (
    <ul>
      {contactListToDisplay.map(el => {
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
