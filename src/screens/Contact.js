import React from 'react';
import '../styles/screens/ContactPage.css';


const Contact = () => {
  
  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' noValidate>
              <div><h1>How can we help you?</h1></div>
              <div><cu2>We’ll get back to you within 7 working days.</cu2></div>
              <div><cu2>We’ll get back to you within 7 working days.</cu2></div>
              <select className="bg-gray-50 border border-gray-300  
                                        text-gray-600 text-sm rounded-lg  
                                        focus:border-blue-500 w-full p-2.5"> 
                        <option value="contactTopic" > 
                            Choose Topic 
                        </option> 
                        <option value="contactTopic"> 
                            Doctor Related Queries 
                        </option> 
                        <option value="contactTopic"> 
                            Suggestions
                        </option> 
                        <option value="contactTopic"> 
                            Feedback
                        </option> 
                        <option value="contactTopic"> 
                            Techinical Issue Reports
                        </option> 
                    </select> 

                {/* Row 1 of form */}
                
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='contactName'
                      className='form-control formInput'
                      placeholder='Full Name'
                      required
                    ></input>
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='email'
                      name='contactEmail'
                      className='form-control formInput'
                      placeholder='Email address'
                      required
                    ></input>
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='contactPhone'
                      className='form-control formInput'
                      placeholder='Phone number'
                    ></input>
                  </div>
                </div>
                {/* Row 4 of form */ }
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='contactMessage'
                      className='form-control formInput'
                      placeholder='Max Allowed Characters:6000'
                    ></textarea>
                  </div>
                </div>
                
                <button className='submit-btn' type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Contact;
