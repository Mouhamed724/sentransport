import './StatReseau.css';

export default function StatReseau({ lignes }) {
  let totalArrets = 0;
  let nombreLignes = 0;
  let maxArrets = 0;
  let ligneMax = null;

  lignes.forEach((ligne) => {
    totalArrets += ligne.arrets;
    nombreLignes += 1;

    if (ligne.arrets > maxArrets) {
      maxArrets = ligne.arrets;
      ligneMax = ligne;
    }
  });

  return (
    <div className="stat-reseau">
      <h2>Statistiques Réseau</h2>

      <div className="stat-item">
        Total arrêts : <span className="stat-highlight">{totalArrets}</span>
      </div>

      <div className="stat-item">
        Nombre de lignes : <span className="stat-highlight">{nombreLignes}</span>
      </div>

      <div className="stat-max">
        Trajet le plus long :
        <br />
        <span className="stat-highlight">
          {ligneMax
            ? `${ligneMax.depart} → ${ligneMax.arrivee}`
            : "Aucune donnée"}
        </span>
      </div>
    </div>
  );
}