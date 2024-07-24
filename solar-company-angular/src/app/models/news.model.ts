export interface News {
  id: string,
  lastModified: string,
  user: string,
  type: string,
  title: string,
  abstract: string,
  text?: string,
  image: string
}

export interface NewsList {
  size: number,
  offset: number,
  max: number,
  list: News[]
}
