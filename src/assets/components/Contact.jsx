import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Set a timeout to clear the result message after 3 seconds
      setTimeout(() => {
        setResult("");
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  // Use useEffect to clear the result message when component unmounts
  useEffect(() => {
    return () => {
      setResult("");
    };
  }, []);

  return (
    <section id="contact" className="custom-radial-bg py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="border-2 border-black rounded-full px-8 py-2">CONTACT</span>
        </h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have a question, project idea, or just want to say hello, feel free to reach out. I'll get back to you as soon as possible.
        </p>
        <div className="flex justify-center mb-12">
          <div className="w-16 h-1 bg-black"></div>
        </div>
        <form onSubmit={onSubmit} className="space-y-8">
          <input type="hidden" name="access_key" value="4c4d87c9-cc83-4bd5-9912-47d0c738da8c" />
          <div>
            <input
              type="text"
              name="name"
              placeholder="ENTER YOUR NAME*"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none placeholder-gray-600"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="ENTER YOUR EMAIL*"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none placeholder-gray-600"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="PHONE NUMBER"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none placeholder-gray-600"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="YOUR MESSAGE*"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border-b-2 border-black bg-transparent focus:outline-none resize-none h-32 placeholder-gray-600"
              required
            ></textarea>
          </div>
          <div className="flex flex-col items-center mt-12">
            <button
              type="submit"
              className="border-2 border-black px-12 py-2 hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
            >
              SUBMIT
            </button>
            {result && <span className="mt-4 text-center">{result}</span>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;