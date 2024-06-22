export interface IEntree {
  id?: number;
  menu_id?: number;
  nom: string;
  ingredient: string;
  prix: string;
  isMainCourse?: boolean;
  createdAt?: string,
  updatedAt?: string,
  deletedAt?: null | string
}


export interface ISingleEntree{
  data : IEntree
}

export interface IDataEntree{
  data: IEntree[]
}
