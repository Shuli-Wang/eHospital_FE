import React, { useState } from 'react';
import '../styles/screens/Contact.css';
import axios from "axios"


const Contact = () => {


  const [formData, setFormData] = useState({
    contactTopic: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactMessage: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }

  let handleSubmit = async(e) => {
    e.preventDefault()
    try{
      alert ("Submitted!!!!!!!!!!!!!")
      axios.post("http://localhost:8080/contact",{
        formData
      })
    }
    catch(e) {
      console.log(e);
    }
    const validationErrors = {}
    //   if(!formData.contactTopic.trim()) {
    //     validationErrors.contactTopic = "Topic is required"
    // }
    if (!formData.contactName.trim()) {
      validationErrors.contactName = "Name is required"
    }

    if (!formData.contactEmail.trim()) {
      validationErrors.contactEmail = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
      validationErrors.contactEmail = "Email is not valid"
    }

    if (!formData.contactPhone.trim()) {
      validationErrors.contactPhone = "Phone is required"
    } else if (formData.contactPhone.length < 10) {
      validationErrors.contactPhone = "Phone should be at least 10 digits"
    }

    if (!formData.contactMessage.trim()) {
      validationErrors.contactMessage = "Message is required"
    } else if (formData.contactMessage.length > 10) {
      validationErrors.contactMessage = "Max length is 20 characters"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")

    }
    
 
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 text-center'>
            {/* <form id='contact-form' noValidate> */}
            <div><h1>How can we help you?</h1></div>
            <div><h3>We’ll get back to you within 7 working days.</h3></div>

    <form onSubmit={handleSubmit}>
    <select name = "contactTopic" class="bg-gray-2 border border-gray-1  
                                        text-gray-10 text-sm rounded-lg  
                                        focus:border-blue-5 w-full p-2.5" onChange={handleChange} > 
                        {/* <option value = ""></option> */}
                        <option value="1"> 
                            Choose Topic 
                            
                        </option>
                        
                        <option value="2"> 
                            Doctor Related Queries 
                            
                        </option> 
                        <option value="3"> 
                            Suggestions
                        </option> 
                        <option value="4"> 
                            Feedback
                        </option> 
                        <option value="5"> 
                            Technical Issue Reports
                        </option> 
                       
                        {/* <option disabled selected></span>}</option> */}
                        {/* {errors.contactTopic && <span>{errors.contactTopic}</span>}  */}
                        
                    </select> 
                    
                    {/* <div class="invalid-feedback">Select and option</div> */}
      <div>
        {/* <label>Username:</label> */}
        <input
          type="text"
          name="contactName"
          placeholder='Full Name'  
          autoComplete='off'  
          onChange={handleChange}   
        />
          {errors.contactName && <span>{errors.contactName}</span>}  
      </div>
      <div>
        {/* <label>Email:</label> */}
        <input
          type="email"
          name="contactEmail"
          placeholder='Email address'
          autoComplete='off'
          onChange={handleChange} 
        />
          {errors.contactEmail && <span>{errors.contactEmail}</span>}  
      </div>
      <div>
        {/* <label>Password:</label> */}
        <input
          type="text"
          name="contactPhone"
          placeholder='Phone number'
          autoComplete='off'
          onChange={handleChange} 
        />
          {errors.contactPhone && <span>{errors.contactPhone}</span>}  
      </div>
      <div>
        {/* <label>Confirm Password:</label> */}
        <input
          type="text"
          name="contactMessage"
          className = 'form-control formInput'
          placeholder='Max Allowed Characters: 6000'
          autoComplete='off'
          onChange={handleChange} 
        />
          {errors.contactMessage && <span>{errors.contactMessage}</span>}  
      </div>
      <button className='submit-btn' type='submit'>
                  Submit
                </button>
    </form>
    {/* </form> */}
              <a href="/ContactAdmin">ContactA</a><br></br>
   </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
