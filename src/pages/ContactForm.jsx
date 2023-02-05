import { ContactForm } from 'components/ContactForm/ContactForm';
import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/usersSelector';

export const Form = () => {
  const getUsers = useSelector(selectUsers);
  return <ContactForm />;
};
