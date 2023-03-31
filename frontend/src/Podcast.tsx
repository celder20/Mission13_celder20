import React from 'react';

function PodcastPage(props: any) {
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

export default PodcastPage;
