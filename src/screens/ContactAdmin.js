import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactUs } from '../redux/actions/userActions';
import { fetchUsers, fetchPatientRegistration } from '../redux/actions/userActions';
import '../styles/screens/ContactAdmin.css';
import { Checkbox } from '@mui/material';
import axios from 'axios'


function ContactAdmin() {
  // const dispatch = useDispatch();
  // const contactUsData = useSelector((state) => state.user.contactUsData);
  // const [showTable, setShowTable] = useState(false);

  const [records, setRecords] = useState([])
  useEffect(()=> {
    //axios.get("https://jsonplaceholder.typicode.com/users")
    axios.get("http://localhost:8080/api/users/contact")
    .then(res => {setRecords(res.data)})
    .catch(err => console.log(err))
  }, [])
  
  // const handleFetchContactUs = () => {
  //   // Clear the table and show loading state
  //   setShowTable(false);

  //   dispatch(fetchContactUs());
  // };


  return (

        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Topic</th>
                <th>Message</th>
                <th>Time</th>
                <th>Reply</th>

                {/* <th>contact_topic</th>
                <th>contact_message</th>
                <th>contact_time</th>
                <th>contact_reply</th> */}
              </tr>
              </thead>
              <tbody>
                {records.map((r,i)=> {
                  return <tr key={i}>
                    <td> {r.id}</td>
                    <td> {r.contact_name}</td>
                    <td> {r.contact_phone}</td>
                    <td> {r.contact_email}</td>
                    <td> {r.contact_topic}</td>
                    <td> {r.contact_message}</td>
                    <td> {r.contact_time}</td>
                    <td> {r.contact_reply}</td>
                    {/* <td> {r.topic}</td>
                    <td> {r.message}</td>
                    <td> {r.time}</td>
                    <td> {r.reply}</td> */}
                  </tr>
                })}
              </tbody>
            
          </table>
        </div>


  );

};

export default ContactAdmin;
