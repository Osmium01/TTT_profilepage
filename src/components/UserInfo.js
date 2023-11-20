// UserInfo.js

import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfilePicture from './ProfilePicture';

const profiledata = {
  "profilePictureUrl": "./profile.jpeg",
  "name": "Aman Singh",
  "followers": 1000,
  "following": 500,
  "designationd": "Software Engineer",
  "instaUrl": "https://www.instagram.com/b_a_b_u_s_a_h_e_b.__1/?hl=en",
};


const UserInfo = () => (
  <div className="user-info">
    <ProfilePicture />
    <ProfileHeader profiledata={profiledata}
    />
  </div>
);

export default UserInfo;
