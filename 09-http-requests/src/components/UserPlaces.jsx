import Error from "./Error";

export default function UserPlaces({
  title,
  places,
  fallbackText,
  onSelectPlace,
  loadingText,
  isLoading,
  error,
}) {
  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <section className="places-category">
      <h2>{title}</h2>
      {isLoading && <p className="fallback-text">{loadingText}</p>}
      {!isLoading && places.length === 0 && (
        <p className="fallback-text">{fallbackText}</p>
      )}
      {!isLoading && places.length > 0 && (
        <ul className="places">
          {places.map((place) => {
            return (
              <li key={place.id} className="place-item">
                <button onClick={() => onSelectPlace(place)}>
                  <img
                    src={`http://localhost:3000/${place.image.src}`}
                    alt={place.image.alt}
                  />
                  <h3>{place.title}</h3>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
