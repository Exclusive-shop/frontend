export interface CategoryItem {
  id: string;
  name: string;
  menu?: CategoryItem[];
}

export type Categories = CategoryItem[];
