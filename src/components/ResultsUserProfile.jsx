export const ResultsUserProfile = ({ dataUsers=[] }) => { 
  const results = dataUsers.results
  
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 mb-5 pb-5">
      { results && results.map((user, idx) => (
          <div key={idx} className="col">
            <div className="card h-100">
              <img loading="lazy" src={user.picture.large} className="card-img-top" alt={user.name.first} />
              <div className="card-body">
                <h5 className="card-title">{user.name.first} {user.name.last}</h5>
                <p className="card-text"><strong>Years: </strong>{user.dob.age}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{user.email}</small>
              </div>
            </div>
          </div>
      )) }
    </div>
  )
}

