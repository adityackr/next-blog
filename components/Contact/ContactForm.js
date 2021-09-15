import { useState } from 'react';
import classes from './ContactForm.module.css';

const ContactForm = () => {
    const [enteredEmail, setEnterdEmail] = useState('');
    const [enteredName, setEnterdName] = useState('');
    const [enteredMessage, setEnterdMessage] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        setEnterdEmail('');
        setEnterdName('');
        setEnterdMessage('');
    };

    return (
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={enteredEmail}
                            onChange={(event) =>
                                setEnterdEmail(event.target.value)
                            }
                        />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={enteredName}
                            onChange={(event) =>
                                setEnterdName(event.target.value)
                            }
                        />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        rows="5"
                        value={enteredMessage}
                        onChange={(event) =>
                            setEnterdMessage(event.target.value)
                        }
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
