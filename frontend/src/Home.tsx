import React from 'react';

//Landing page for the website along with bootstrap styling
function HomePage() {
  return (
    <div className="container">
      <h1 className="text-center mt-5">
        This is the landing page for the movie collection website!
      </h1>
      <img
        src="./JoelHiltonHeadshot.jpg"
        alt="Joel Hilton headshot"
        className="img-fluid mt-5"
      />
    </div>
  );
}

// An export that allows the homepage function to be imported into App.tsx
export default HomePage;
