export interface Item {
  id: number;
  label: string;
  link: string;
  children?: Array<Item>;
}
