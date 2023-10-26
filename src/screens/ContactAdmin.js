import '../styles/screens/ContactAdmin.css';
import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPatientRegistration } from '../redux/actions/contactActions';


function ContactAdmin() {
  const dispatch = useDispatch();
  const tableNames = useSelector((state) => state.user.users);
  const patientRegistrationData = useSelector((state) => state.user.patientRegistrationData);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    // Check if tableNames have data, then show the table
    if (tableNames.length > 0) {
      setShowTable(true);
    } else {
      setShowTable(false);
    }
  }, [tableNames]);


  const handleFetchPatientRegistration = () => {
    // Clear the table and show loading state
    setShowTable(false);

    dispatch(fetchPatientRegistration());
  };

  
  return (
      <div className="ContactAdmin">
      <div className='container'>
       <button type="refreshContactAdmin" onClick={handleFetchPatientRegistration}>
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
                <td> 0 </td>
                </tr>


                
            {/*
            {contactUsData.map((contact) => (
              <tr key={contact.contact_id}>
                <td> {contact.contact_id}</td>
                <td> {contact.contact_name}</td>
                <td> {contact.contact_email}</td>
                <td> {contact.contact_phone}</td>
                <td> {contact.contact_topic}</td>
                <td> {contact.contact_message}</td>
                <td> {contact.contact_time}</td>
                <td> {contact.contact_reply}</td>
              </tr>
              */}
       </table>
       </h4>
   </div>
   </div>
      
    

  );
  
};

export default ContactAdmin;
