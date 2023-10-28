import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactUs } from '../redux/actions/userActions';
import { fetchUsers, fetchPatientRegistration } from '../redux/actions/userActions';
import '../styles/screens/ContactAdmin.css';
import { Checkbox } from '@mui/material';


function ContactAdmin() {
  const dispatch = useDispatch();
  const contactUsData = useSelector((state) => state.user.contactUsData);
  const [showTable, setShowTable] = useState(false);

  const handleFetchContactUs = () => {
    // Clear the table and show loading state
    setShowTable(false);

    dispatch(fetchContactUs());
  };


  return (
    <div className="ContactAdmin">
      <div className='container'>
        <button type="refreshContactAdmin" onClick={handleFetchContactUs}>
          Refresh
        </button>
        <br></br>


        <h4>
          <table border={2}>
            <tr>
              <th>Contact No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Topic</th>
              <th>Message</th>
              <th>Submit Time</th>
              <th>Reply Status</th>
            </tr>

            <tr>
              <td> 123</td>
              <td> Shuli</td>
              <td> swang515@uottawa.ca</td>
              <td> 3435585817</td>
              <td> Doctor Replated Queries</td>
              <td> Is Doctor White available on Oct 19?</td>
              <td> 2023-10-26 14:58:15</td>
              <td> <Checkbox></Checkbox> </td>
            </tr>


            {/*
            
            I dont know why this dont work
            


            
            {contactUsData.length > 0 && (
              <div>
                {contactUsData.map((contact) => (
                  <li key={contact.id}>
                    <td> id: {contact.id}</td>
                    <td> sd{contact.contact_name}</td>
                    <td> {contact.contact_email}</td>
                    <td> {contact.contact_phone}</td>
                    <td> {contact.contact_topic}</td>
                    <td> {contact.contact_message}</td>
                    <td> {contact.contact_time}</td>
                    <td> {contact.contact_reply}</td>
                  </li>
                ))}
              </div>
            )}
            
            
            
            */}

          

          </table>
        </h4>
      </div>
    </div>



  );

};

export default ContactAdmin;
