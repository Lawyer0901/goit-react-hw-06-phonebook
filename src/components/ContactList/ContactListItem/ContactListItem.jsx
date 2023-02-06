import { Text } from '../ContactList.styled';
// import PropTypes from 'prop-types';

export function ContactListItem({ name, number, onClick }) {
  return (
    <li>
      <Text>
        Contact Name:{name}
        <span>Contact number: {number}</span>
        <button onClick={onClick}>Delete contact</button>
      </Text>
    </li>
  );
}

// ContactListItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func,
// };
