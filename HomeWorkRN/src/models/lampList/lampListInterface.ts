export interface ILampProps {
  id?: number;
  title: string;
  brend: string;
  typeItem: string;
  technology: string;
  power: number;
  lampBase: string;
  light: string;
  image: string;
  price: number;
  clickHandler: (title: string, count: number) => void;
}

export interface ILampListProps {
  lampList: ILampProps[];
  clickHandler: (title: string, count: number) => void;
}
