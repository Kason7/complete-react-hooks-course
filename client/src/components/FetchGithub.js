import React, { useState, useEffect } from 'react';

const initProfile = {
  followers: null,
  publicRepos: null,
  avatar: null,
};

export const FetchGithub = () => {
  const [profile, setProfile] = useState(initProfile);

  const getProfile = async () => {
    const res = await fetch('https://api.github.com/users/Kason7');
    const json = await res.json();

    setProfile({
      followers: json.followers,
      publicRepos: json.public_repos,
      avatar: json.avatar_url,
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <h2>Fetch GitHub Profile</h2>
      <img style={{ borderRadius: '50%' }} src={profile.avatar} alt=''></img>
      <p>Followers: {profile.followers} </p>
      <p>Repos: {profile.publicRepos} </p>
    </div>
  );
};

export default FetchGithub;
