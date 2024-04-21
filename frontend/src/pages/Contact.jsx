import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ScrollToTop from "../components/ScrollToTop";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  console.log('Form data:', form.current);


    emailjs
      .sendForm('service_j6c9ti6', 'template_qwom79g', form.current, 
      {publicKey: 'P_EDJnQgODqIrRxtq'
  })
      .then(
        (result) => {
          console.log('Email sent successfully');
          ScrollToTop()
          e.target.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('There was an error sending your message. Please try again.');
        }
      );
  };

  return (
    <div>
      <div className="bg-black justify-center h-[92vh] flex flex-col items-center">
        <div className="absolute w-full h-[92vh] overflow-hidden">
          <img src="" alt="" className="opacity-80 w-full h-full object-cover" />
        </div>
        <h1 className="text-sea font-shrikhand text-5xl text-center z-30">GET IN TOUCH</h1>
        <br />
        <p className="text-white w-3/6 text-center font-ubuntu font-normal z-30">
          Contact us to bring our program to your library, county, or other location, or to join our team and be one of our teachers or program directors.
        </p>
      </div>

      <div style={{ height: '50px' }} /> {/* Spacer with specified height */}

      <div className="bg-white w-full h-full p-0 m-0">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            style={{ width: '50%', marginBottom: '10px', borderColor: 'black', borderWidth: '1px' }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            style={{ width: '50%', marginBottom: '10px', borderColor: 'black', borderWidth: '1px' }}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            style={{ width: '50%', marginBottom: '10px', borderColor: 'black', borderWidth: '1px' }}
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            style={{ width: '50%', marginBottom: '10px', borderColor: 'black', borderWidth: '1px' }}
          ></textarea>

          <button
            type="submit"
            className="bg-night text-white font-ubuntu rounded-3xl mt-4 p-5 px-7"
          >
            Send Message
          </button>
        </form>
        <div style={{ height: '50px' }} /> {/* Spacer with specified height */}

      </div>
    </div>
  );
};

export default Contact;
