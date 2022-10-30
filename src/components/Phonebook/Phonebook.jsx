import { Component } from 'react'
import { nanoid } from 'nanoid'
import css from './Phonebook.module.css'
class Phonebook extends Component {
    state = {
        name: '',
        number: ''
    };

    onNewContact = e => {
        const {name, value = name.value} = e.target
        this.setState({ [name]: value })

    };
    createContact = (e) => {
        e.preventDefault()

        const item = {
            name: this.state.name,
            number: this.state.number,
            id: nanoid()
        }

        let check = this.props.contacts.find((element) => {
            return element.name.toLowerCase() === item.name.toLowerCase()
        })

        if (check) {
            alert(`${item.name} is already in contacts.`)
            return
        }

        this.props.addContactNew(item)
        this.clearField()
    };

    clearField = () => {
        this.setState({name: '',number: ''})
    }
    
    render() {

        return (
            <div>
                <form className={css.form} onSubmit={this.createContact}>
            
                    <label className={css.label} htmlFor="1">Name</label>
                    <input
                        className={css.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.onNewContact}
                        id={1}
                    />

                    <label htmlFor="2">Number</label>
                    <input
                        className={css.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.onNewContact}
                        id={2}
                    />
                    <button type="submit">Add contact</button>
                </form>
            </div>
        )
    }
};

export { Phonebook };