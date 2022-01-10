import React, { useState, useEffect } from "react";
import ContactList from "../ContactsList";
import ContactForm from "../ContactForm";
import Filter from "../Filter/Filter";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem("contacts")) ?? ""
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContactItem = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast(`${name} is already in contacts`);
      return;
    }
    setContacts((state) => [...state, contact]);
  };

  const onDeleteItem = (itemID) => {
    setContacts((prevstate) => prevstate.filter((item) => item.id !== itemID));
  };

  const getFilterList = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onChangeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const visibleItem = getFilterList();
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactItem} />
      <ToastContainer />
      <h2>Contacts</h2>
      {<Filter value={filter} onChange={onChangeFilter} />}
      {<ContactList onDeleteItem={onDeleteItem} contacts={visibleItem} />}
    </>
  );
}
