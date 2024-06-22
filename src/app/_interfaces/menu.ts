export interface IMenu {
  id: number;
  name: string;
  createdAt: string,
  updatedAt: string,
  deletedAt: null | string
}




export interface ISingleMenu{
  data : IMenu
}

export interface IDataMenu{
  data: IMenu[]
}
