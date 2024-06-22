export interface IReservation {
  id: number;
  user_id: number;
  nom : string;
  Nb_personne : string;
  Date : string;
  heure : string;
  createdAt: string;
  updatedAt: string,
  deletedAt: null | string
}

export interface ISingleReservation{
  data : IReservation
}

export interface IDataReservation{
  data: IReservation[]
}
