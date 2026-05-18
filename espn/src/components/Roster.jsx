import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getRosterLink } from "../apiLink";

function Roster() {
  const { sport, id } = useParams();

  const [team, setTeam] = useState(null);

  const link = getRosterLink(sport, id);

  useEffect(() => {
    if (!link) return;

    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        let athletes = [];

        if (Array.isArray(data.athletes)) {
          // soccer style
          if (data.athletes[0]?.fullName) {
            athletes = data.athletes;
          }

          // baseball / grouped sports style
          else if (data.athletes[0]?.items) {
            data.athletes.forEach((group) => {
              group.items.forEach((player) => {
                athletes.push(player);
              });
            });
          }
        }

        setTeam(athletes);
      });
  }, [link]);

  if (!team) {
    return (
      <div className="container text-center mt-5">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Roster</h1>

      <div className="row g-4">
        {team.map((i) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            key={i.id || i.uid}
          >
            <div
              className="card h-100 shadow-sm text-center"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <img
                className="card-img-top"
                src={
                  i.headshot?.href ||
                  "https://via.placeholder.com/300x300?text=No+Image"
                }
                alt={i.fullName}
                style={{
                  height: "220px",
                  objectFit: "cover",
                  backgroundColor: "#eee",
                }}
              />

              <div className="card-body">
                <h5 className="card-title">{i.fullName}</h5>

                <p className="card-text text-muted">
                  {i.position?.displayName || i.position}
                </p>

                {i.jersey && <p className="fw-bold mb-0">#{i.jersey}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roster;
