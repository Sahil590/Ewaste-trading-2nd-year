import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Listings from './Listings'
import Reviews from './Reviews'
import UpdateInfo from './UpdateInfo'
import CreateListing from './CreateListing'
import LeaveReview from './LeaveReview'

function Profile() {

  const { userid } = useParams();

  const [profileData, setProfileData] = useState({});
  
  useEffect(() => {
    axios.get(`/users/${userid}`)
      .then(res => {
        setProfileData(res.data)
        console.log(profileData)
      })
  }, []);

  return (
          <>
            <div style={{position: "relative", marginBottom: '50px'}}>
              <UpdateInfo profileData={profileData}>
                Edit Info
              </UpdateInfo>

              <CreateListing userid={profileData.userid}>
                Create Listing
              </CreateListing>

              <LeaveReview userid={profileData.userid}>
                Leave Review
              </LeaveReview>

              <p className='display-4'>{profileData && profileData.firstname}'s profile</p>

              <p>{profileData.userinfo}</p>
            </div>

            <Listings userid={userid} />

            <Reviews userid={userid} />
          </>
  )
}
export default Profile;