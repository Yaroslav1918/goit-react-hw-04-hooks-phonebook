import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  ContactsForm,
  ContactsMark,
  ContactsInput,
  ContactsButton,
  ContactsSpan,
} from "./ContactForm.styled";

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(name, number);
    setName((name) => (name = ""));
    setNumber((number) => (number = ""));
  };

  return (
    <>
      <ContactsForm onSubmit={onSubmitForm}>
        <ContactsMark>
          <ContactsSpan>Name</ContactsSpan>
          <ContactsInput
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onChangeInput}
          />
        </ContactsMark>
        <ContactsMark>
          <ContactsSpan> Number </ContactsSpan>
          <ContactsInput
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onChangeInput}
          />
        </ContactsMark>
        <ContactsButton type="submit">add contact</ContactsButton>
      </ContactsForm>
    </>
  );
}
// class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   onChangeInput = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };
//   onSubmitForm = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.setState({
//       name: "",
//       number: "",
//     });
//   };
//   render() {
//     const { name, number } = this.state;
//     return (
//       <>
//         <ContactsForm onSubmit={this.onSubmitForm}>
//           <ContactsMark>
//             <ContactsSpan>Name</ContactsSpan>
//             <ContactsInput
//               type="text"
//               name="name"
//               value={name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               onChange={this.onChangeInput}
//             />
//           </ContactsMark>
//           <ContactsMark>
//             <ContactsSpan> Number </ContactsSpan>
//             <ContactsInput
//               type="tel"
//               name="number"
//               value={number}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               onChange={this.onChangeInput}
//             />
//           </ContactsMark>
//           <ContactsButton type="submit">add contact</ContactsButton>
//         </ContactsForm>
//       </>
//     );
//   }
// }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export default ContactForm;
