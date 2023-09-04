export default function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.imageUrl} alt={props.title}/>
            <div className="card-info">
                <div className="card-info-loc-container">
                    <i class="fas fa-map-marker-alt"></i>
                    <span className="card-info-loc">{props.location}</span>
                    <a className="card-info-loc-link" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card-info-title bold">{props.title}</h1>
                <div className="card-info-date-container">
                    <span className="card-info-date bold">{props.startDate}</span>
                    <span className="card-info-date bold"> - </span>
                    <span className="card-info-date bold">{props.endDate}</span>
                </div>
                <p className="card-info-desc">{props.description}</p>
            </div>
        </div>
    )
}