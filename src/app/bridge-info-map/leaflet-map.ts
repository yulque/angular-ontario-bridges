
import * as Leaflet from 'leaflet';

const ontario = {
    coords: new Leaflet.LatLng(51.2538, -85.3232),
    zoom: 5
}

export class LeafletMap {
    map: Leaflet.Map;
    
    constructor(id: string){
        this.map = Leaflet.map(id);

        Leaflet
        .tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png')
        .addTo(this.map);

        this.map.setView(ontario.coords, ontario.zoom);
        
    }

    update (lat: number, lng: number, name: string): void {
        const coords = new Leaflet.LatLng(lat, lng);
        this.map.setView(coords, 14);
    }
}