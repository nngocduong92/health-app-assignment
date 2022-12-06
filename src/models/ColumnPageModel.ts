export interface ComlumnPageTopModel {
  title: string;
  description: string;
}

export interface ColumnPageContentModel {
  image: string;
  date: string;
  title: string;
  tags: string[];
}

export interface ColumnPageModel {
  comlumnPageTopData: ComlumnPageTopModel[];
  columnPageContentModel: ColumnPageContentModel[];
}
