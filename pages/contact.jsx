import React, { useState } from 'react'
import { Container } from "@mui/material";
import Herobanner from "../src/components/Herobanner"
import {HiPhone} from "react-icons/hi";
import {IoMail} from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = ({ data }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      };

  return (
    <div>
        
         <Herobanner
        title="Contact Us"
        imgUri="/assets/images/cities/delhi.jpg"
      />
        <Container>
       

<div className="flex items-center p-10 justify-center">
  <h2 className="text-xl md:text-2xl">NEED HELP</h2>
  <span className="inline text-primary text-xl md:text-2xl ml-2">CONTACT US</span>
</div>


      {/* blocks */}
       <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <div className="border-2 border-gray-200 w-full ">

            <div className="h-[120px] w-[120px] my-5 mx-auto border-2 rounded-full">
            <div className=" h-32 w-32 rounded-xl  my-10 mx-10 ">
                 <HiPhone className="w-10 h-10  rounded-full  text-primary " />
            </div>
            </div>
            
            
            <div className=" h-20 w-full rounded-b-lg p-3 flex items-center justify-center text-center  flex-col">
                <h2 className="text-md font-semibold">Customer Care</h2>
                <p className="text-md text-gray-400">+91-141-669-1112</p>
            </div>
        </div>

        <div className="border-2 border-gray-200 w-full ">
          <div className="h-[120px] w-[120px] my-5 mx-auto border-2 rounded-full flex items-center justify-center">
            <div className="h-32 w-32 rounded-full  flex items-center justify-center">
              <IoMail className="w-10 h-10 text-primary" />
            </div>
          </div>

            <div className=" h-20 w-full rounded-b-lg p-3 flex items-center justify-center text-center  flex-col">
                <h2 className="text-md font-semibold">Email</h2>
                <p className="text-md text-gray-400">+91-141-669-1112</p>
            </div>
        </div>
        <div className="border-2 border-gray-200 w-full">
        <div className="h-[120px] w-[120px] my-5 mx-auto border-2 rounded-full flex items-center justify-center">
            <div className="h-32 w-32 rounded-xl my-10 mx-10 flex items-center justify-center">
           < RiWhatsappFill className="w-12 h-10  rounded-full  text-primary " />
            </div>
           </div>
                  <div className=" h-20 w-full rounded-b-lg p-3 flex items-center justify-center text-center  flex-col">
                  <h2 className="text-md font-semibold">Customer Care</h2>
                  <p className="text-md text-gray-400">+91-141-669-1112</p>
                </div>
        </div>
       </div>

       {/* feedback form */}
        
        <div className="mb-20">

          <div className="flex items-center p-10 justify-center">
            <h2 className="text-xl md:text-2xl">FEEDBACK /</h2>
            <span className="inline text-primary text-xl md:text-2xl ml-2">ENQUIRY FORM</span>
          </div>
            
       <form className="max-w-md mx-auto my-4" onSubmit={handleSubmit}>
        <div className="mb-4">
         <label htmlFor="name" className="block text-gray-600 text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border  rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="number" className="block text-gray-600 text-sm font-medium">
            Phone Number
        </label>
        <input 
        type="number"
        id="number"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        rows="4"
        className="mt-1 p-2 w-full border rounded-md"
        required
         />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-600 text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="mt-1 p-2 w-full border rounded-md"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-primary text-white w-full px-4 py-2 rounded-full hover:bg-secondary transition-colors"
      >
        Submit
      </button>
    </form>
 </div>
    </Container>

    {/* last section */}
      
    </div>
  )
}

export default Contact