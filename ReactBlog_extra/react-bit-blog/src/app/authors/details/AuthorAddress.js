import React from 'react';

const AuthorAddress = ({ authorAddress }) => {
    const { street, city, zipcode, geoLocation } = authorAddress;

    const mapUrl = geoLocation.getGoogleMapUrl();

    return (
        <div className="col s12">
            {/* Show only on medium and large devices */}
            <div className="card horizontal blue lighten-3 hide-on-small-only">
                <div className="card-stacked">
                    <div className="card-content blue-text text-darken-4">
                        <h5>Address</h5>
                        <p>street: {street}</p>
                        <p>city: {city}</p>
                        <p>zipcode: {zipcode}</p>
                    </div>
                </div>
                <div className="card-image">
                    <iframe src={mapUrl} width="100%" height="200" frameBorder="0" style={{ border: 0 }} allowFullScreen title="Google Map"></iframe>
                </div>
            </div>
            {/* Show only on small devices */}
            <div className="card blue lighten-3 hide-on-med-and-up">
                <div className="card-stacked">
                    <div className="card-content blue-text text-darken-4">
                        <h5>Address</h5>
                        <p>street: {street}</p>
                        <p>city: {city}</p>
                        <p>zipcode: {zipcode}</p>
                    </div>
                </div>
                <div className="card-image center">
                    <iframe src={mapUrl} width="100%" height="200" frameBorder="0" style={{ border: 0 }} allowFullScreen title="Google Map"></iframe>
                </div>
            </div>
        </div>
    );
}

export { AuthorAddress };