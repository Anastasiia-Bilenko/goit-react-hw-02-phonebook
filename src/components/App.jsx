import { ContactForm } from './ContactForm /ContactForm';
import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
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
    name: '',
    number: '',
  };

  filterFunc = value => {
    this.setState(prevState => {
      return {
        filter: value,
      };
    });
  };

  deleteCont = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== id),
      };
    });
  };

  submitFunc = values => {
    const newContact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };
    this.setState(prevState => {
      let existWord = prevState.contacts.some(
        object => object.name === newContact.name
      );
      if (existWord) {
        alert(`${newContact.name} is already in contacts.`);
        return;
      }
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  render() {
    const filteredCont = this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm submitFunc={this.submitFunc} />
        <h2>Contacts</h2>
        <Filter filterFunc={this.filterFunc} />
        <ContactList items={filteredCont} deleteCont={this.deleteCont} />
      </div>
    );
  }
}
