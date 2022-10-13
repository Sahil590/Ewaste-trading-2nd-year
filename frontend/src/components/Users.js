import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCard from './UserCard'
import { Row } from 'react-bootstrap'

function Users() {

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get("/users")
      .then(res => {
        setProfiles(res.data)
        console.log(profiles)
      })
  }, []);

  return (
    <Row>
      {profiles.map((profile) => (
        <UserCard key={profile.userid} users = {profile} />
      ))}
    </Row>
  )
}

export default Users;