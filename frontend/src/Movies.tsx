import data from './MovieData.json';

const MDS = data.MovieData;

function MovieList() {
  return (
    <>
      <div className="container my-5">
        <h2 className="text-center mb-4" style={{ color: 'purple' }}>
          Joel's Movie Collection!
        </h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {MDS.map((m, index) => (
                <tr key={index}>
                  <td>{m.Title}</td>
                  <td>{m.Category}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MovieList;
