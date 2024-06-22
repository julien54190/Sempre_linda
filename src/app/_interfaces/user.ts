export interface IUser {
  id?: number,
  nom: string,
  prenom: string,
  email: string,
  numero_domicile: string,
  rue_domicile: string,
  ville_domicile: string,
  zip: string,
  password: string,
  isAdmin?: boolean,
  createdAt?: string,
  updatedAt?: string,
  deletedAt?: null | string
}


export interface ISingleUser{
  data : IUser
}

export interface IDataUser{
  data: IUser[]
}
