import {
  ContactFormList,
  ContactFormItem,
  ContactFormText,
  ContactFormDeleteBtn,
} from './ContactList.styled';
import propTypes from 'prop-types';

export const ContactList = ({ contacts, removeHandler }) => (
  <ContactFormList>
    {contacts.map((contact, id) => (
      <ContactFormItem key={id}>
        <ContactFormText>
          {contact.name}: {contact.number}
        </ContactFormText>
        <ContactFormDeleteBtn
          onClick={() => {
            removeHandler(contact.id);
          }}
        >
          Delete
        </ContactFormDeleteBtn>
      </ContactFormItem>
    ))}
  </ContactFormList>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  removeHandler: propTypes.func.isRequired,
};
