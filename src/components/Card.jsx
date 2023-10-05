export default function Card(props) {
    console.log(props)
    return (
        <div>
            <section className="card--data">
                <img className="card--image" src={props.item.imageUrl} />
                <div className="card--description">
                    <p className="card--location">{props.item.location.toUpperCase()} <a className="card--googleURL" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a></p>
                    <h1>{props.item.title}</h1>
                    <p><strong>{props.item.startDate} - {props.item.endDate}</strong></p>
                    <p>{props.item.description}</p>
                </div>
            </section>
            {!props.lastItem && <hr />}
        </div>
    )
}