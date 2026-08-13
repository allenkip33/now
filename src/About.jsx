import React from 'react';

function About({ about, image = "https://placeholder.com" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
