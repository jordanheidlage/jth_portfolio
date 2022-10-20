import React from 'react';


export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
      <a href={process.env.PUBLIC_URL + "/resume.pdf"} download>Resume</a></p>
    </div>
  );
}