export interface Marker {
  lat: number;
  lng: number;
}

export class Location {
  public position: Marker;

  constructor(
    public id: number,
    public name: string,
    public city: string,
    public latitude: number,
    public longitude: number,
    public fee: boolean | null,
    public email: string | null,
    public opening_hours: string | null,
    public phone: string | null,
    public website: string | null
  ) {
    this.position = {
      lat: latitude,
      lng: longitude,
    };
  }
}
