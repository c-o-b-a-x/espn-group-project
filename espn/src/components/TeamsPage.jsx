import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getLeagueLink } from "../apiLink";
import { Link } from "react-router-dom";

function TeamsPage() {
  const { sport } = useParams();

  const [team, setTeam] = useState(null);

  const link = getLeagueLink(sport);

  useEffect(() => {
    if (!link) return;

    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTeam(data);
      });
  }, [link]);

  if (!team) {
    return (
      <div className="container text-center mt-5">
        <h1>Loading...</h1>
      </div>
    );
  }

  const teams = team.sports?.[0]?.leagues?.[0]?.teams || [];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Teams Page</h1>

      <div className="row g-4">
        {teams.map((t) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={t.team.id}>
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body">
                <Link to={`/team/${sport}/${t.team.id}`}>
                  <img
                    src={t.team.logos?.[0]?.href}
                    alt={t.team.displayName}
                    className="img-fluid mb-3"
                    style={{ height: "100px", objectFit: "contain" }}
                  />
                </Link>

                <h5 className="card-title">{t.team.displayName}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamsPage;
