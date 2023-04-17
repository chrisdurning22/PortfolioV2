import React, { BaseSyntheticEvent, FC, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Spinner } from 'react-bootstrap';
import { LOADING_MESSAGE } from '../../constants/constants';
import { toast } from 'react-toastify';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef() as any;

  const handleSubmit = (event: BaseSyntheticEvent) => {
    setLoading(true);
    event.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID as any, process.env.REACT_APP_TEMPLATE_ID as any, form.current, process.env.REACT_APP_PUBLIC_KEY)
    .then((result) => {
        setLoading(false);
        toast.success("Message Successfully Sent", {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 1000,
        });
    }, (error) => {
        setLoading(false);
        toast.error("Unsuccessful: " + error, {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 1000,
        });
    });
  }

  return (
    !loading ? 
      <section data-testid="Contact" id='contact' className='contact fade-item' style={{ animationDelay: '1700ms'}}>
        <div className='contact-section'>
          <h3>Contact &#128241;</h3>
          <form ref={form} id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group margin-top-20">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" name="user_name"/>
            </div>
            <div className="form-group margin-top-20">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" required className="form-control" aria-describedby="emailHelp" name="user_email"/>
            </div>
            <div className="form-group margin-top-20">
                <label htmlFor="message">Message</label>
                <textarea required rows={13} className="form-control" name="message"></textarea>
            </div>
            <div className='flex-center margin-top-20'>
              <button style={{backgroundColor: '#49c5b6', border: 'none'}} type="submit" className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
    </section>
    :
    <div>
      <div className="flex-center margin-top-150">
        <h6>{LOADING_MESSAGE}</h6>
      </div>
      <div className="flex-center margin-top-5 margin-bottom-150">
        <Spinner animation="border" variant="primary" />
      </div>
    </div>
  )
};

export default Contact;
