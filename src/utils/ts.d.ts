export interface ICategories {
  id: number;
  name: string;
}

export interface IBlog {
  title: string;
  categories: ICategories[];
  tags: ICategories[];
  href: string;
  themeColor: string;
  img: string;
  createTime: string;
  id: number;
}
