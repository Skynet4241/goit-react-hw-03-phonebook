import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import {
  SectionWrap,
  Heading,
  ContactsTitle,
} from './ContactForm/ContactForm.styled';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLS = JSON.parse(localStorage.getItem('contactlist'));
    if (contactsFromLS) {
      this.setState({
        contacts: contactsFromLS,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevStateContacts = prevState.contacts;
    const nextStayContacts = this.state.contacts;

    if (prevStateContacts !== nextStayContacts) {
      localStorage.setItem('contactlist', JSON.stringify(nextStayContacts));
    }
  }

  submitHandler = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;
    const newName = e.target.elements.name.value;
    const contactsList = [...this.state.contacts];
    const newContact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    if (contactsList.find(contact => newName === contact.name)) {
      alert(`${newName} is already in contacts.`);
      return;
    } else {
      contactsList.push({ ...newContact });
    }

    this.setState({ contacts: contactsList });
  };

  removeContactItem = id => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(item => item.id !== id) };
    });
  };

  filterHandler = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  getFilterContactsName = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLocaleLowerCase());
    });
  };

  render() {
    return (
      <>
        <SectionWrap>
          <Heading>Phonebook</Heading>
          <ContactForm onSubmitHandler={this.submitHandler} />
        </SectionWrap>
        <SectionWrap>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter
            filter={this.state.filter}
            filterHandler={this.filterHandler}
          />
          <ContactList
            contacts={this.getFilterContactsName()}
            removeHandler={this.removeContactItem}
          />
        </SectionWrap>
      </>
    );
  }
}
