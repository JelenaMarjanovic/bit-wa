class GeoLocation {
    constructor({ lat, lng }) {
        this.latitude = lat;
        this.longitude = lng;
    }

    getGoogleMapUrl() {
        return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11322.276616522473!2d${this.longitude}!3d${this.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1521898884474`;
    }
}

export { GeoLocation };