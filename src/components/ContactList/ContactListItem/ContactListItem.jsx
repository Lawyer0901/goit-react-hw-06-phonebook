import { Text, SpanText } from '../ContactList.styled';
// import PropTypes from 'prop-types';

export function ContactListItem({ name, number, onClick }) {
  return (
    <li>
      <Text>
        Contact Name:<SpanText>{name}</SpanText>
        <span>
          Contact number: <SpanText>{number}</SpanText>
        </span>
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
