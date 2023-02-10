import {
  ContactsForm,
  ContactFormLabel,
  ContactFormInput,
  ContactFormBtn,
} from './ContactForm.styled';
import propTypes from 'prop-types';

export const ContactForm = ({ onSubmitHandler }) => (
  <ContactsForm onSubmit={onSubmitHandler}>
    <ContactFormLabel htmlFor="name">Name</ContactFormLabel>
    <ContactFormInput
      type="text"
      id="name"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    <ContactFormLabel htmlFor="number">Number</ContactFormLabel>
    <ContactFormInput
      type="tel"
      id="number"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />
    <ContactFormBtn>Add contact</ContactFormBtn>
  </ContactsForm>
);

ContactForm.propTypes = {
  onSubmitHandler: propTypes.func.isRequired,
};
