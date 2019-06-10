
export const getMarkers = input => input.value || null;

export const getPosition = e => ({
    lng: e.latLng.lng(),
    lat: e.latLng.lat()
})