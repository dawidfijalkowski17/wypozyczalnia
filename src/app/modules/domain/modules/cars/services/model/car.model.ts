export interface ICar {
    mark: string,
    model: string,
    engine_capacity: string,
    color: string,
    gearbox_type: GearboxType,
    car_type: CarType,
    price_per_day: number,
    id: number
}

export interface ICarTable extends ICar {
    isRented: boolean;
}

export enum GearboxType {
    Manulana = "Manualna",
    Automatyczna = "Automatyczna"
}
  
export enum CarType {
    Małe = "Małe",
    Średnie = "Średnie",
    Duże = "Duże",
    Bus = "Bus"
}