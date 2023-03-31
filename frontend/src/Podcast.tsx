import React from 'react';

function PodcastPage() {
  // Styling and bootstrap for the link to the external Baconsale podcast page
  return (
    <React.Fragment>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <img src="./emoji-music.jpg" />
            <h1 className="display-4 mb-3">MY PODCASTS PAGE</h1>
            <a href="https://baconsale.com" className="btn btn-primary">
              Link to the Bacon Sale Podcasts page!
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

// An export that allows the podcast function to be imported into App.tsx
export default PodcastPage;
