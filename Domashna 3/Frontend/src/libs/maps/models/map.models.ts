export interface Marker {
  lat: number;
  lng: number;
}

export class Place {
  public position: Marker;

  constructor(
    public id: number,
    public name: string,
    public city: string,
    public xcoordinate: number,
    public ycoordinate: number,
    public hasEntranceFee: boolean | null,
    public website: string | null,
    public openingHours: string | null,
    public phoneNumber: string | null,
    public type: string | null
  ) {
    this.position = {
      lat: xcoordinate,
      lng: ycoordinate,
    };
  }
}
