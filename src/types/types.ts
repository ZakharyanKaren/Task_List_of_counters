export interface ITechSpecialist {
  id: number;
  name: string;
  count: number;
  price: number;
}

export interface ITechSpecialistsData {
  id: number;
  name: string;
  list: ITechSpecialist[];
}
