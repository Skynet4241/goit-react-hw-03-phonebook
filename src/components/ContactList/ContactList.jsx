import {
  ContactFormList,
  ContactFormItem,
  ContactFormText,
  ContactFormDeleteBtn,
} from './ContactList.styled';

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
