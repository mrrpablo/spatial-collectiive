import { useState } from 'react';
import Swal from 'sweetalert2';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const keyValue = import.meta.env.VITE_Code;

    const data = {
      access_key: keyValue,
      name,
      email,
      message,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        // Log detailed response if there's an error
        const errorDetails = await res.json();
        console.error('Error details:', errorDetails);
        throw new Error(`Request failed with status ${res.status}`);
      }

      const result = await res.json();
      console.log('Server response:', result);

      setContent([...content, { name, email, message }]);
      if (result.success) {
        Swal.fire({
          title: 'Good job!',
          text: 'Thank you for contacting us!',
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/');
          }
        });
      }
    } catch (err) {
      console.error('Error:', err.message);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } finally {
      setLoading(false);
    }

    setformData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='flex justify-center used_font my-6'>
      <div className='w-[305px] md:w-[500px]'>
        <h3 className='text-center font-bold text-white text-[30px] md:text-[36px]'>
          CONTACT FORM
        </h3>
        <p className='text-white my-2 text-[18px] md:text-[24px]'>
          Send us a detailed description of your request and we'll discuss a way
          to realize it and provide a solution
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            value={name}
            className='w-full bg-[#D9D9D9] rounded-md px-3 py-2 my-2 outline-none'
            placeholder='Enter your Name'
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            value={email}
            className='w-full bg-[#D9D9D9] rounded-md px-3 py-2 my-2 outline-none'
            placeholder='Enter your Email'
            onChange={handleChange}
            required
          />
          <textarea
            placeholder='How may we be of help to you?'
            name='message'
            value={message}
            className='w-full bg-[#D9D9D9] rounded-md px-3 py-2 my-2 outline-none h-[120px]'
            onChange={handleChange}
            required
          ></textarea>
          <button
            className={` ${
              loading ? 'bg-transparent border' : 'bg-[#F2EA00]'
            } text-[#0E2F26] px-10 py-4 rounded-md my-2 w-full font-bold hover:bg-transparent hover:text-[#F2EA00] hover:ease-in-out hover:duration-300 hover:border`}
          >
            {loading ? <Loader /> : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
