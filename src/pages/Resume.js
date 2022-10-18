import React from 'react';


export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
      <a href={process.env.PUBLIC_URL + "/resume.pdf"} download>Resume</a></p>
      <iframe src="https://docs.google.com/document/d/1VOYFNJpVj3VJ7DCPSlmBxOoitLrqptNf/edit?usp=sharing&ouid=106342406943723089611&rtpof=true&sd=true" title="Resume"></iframe>

    </div>
  );
}