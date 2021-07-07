export interface ILampListProps {
  id: number;
  title: string;
  brend: string;
  typeItem: string;
  technology: string;
  power: number;
  lampBase: string;
  light: string;
  image: string;
  price: number;
}

export interface ILampProps {
  lampList: ILampListProps[];
}
