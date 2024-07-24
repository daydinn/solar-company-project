export interface Page {
  id: string,
  name: string,
  content: PageContent[],

}

export interface PageContent {
  id: string,
  type: string,
  content: string | null,
  config: {
    show?: string,
    size?: number
  } | null
}

export interface PageTree {
  navigation: PageNavigation[],
  landing: string
}

export interface PageNavigation {
  id: string
  name: string,
}
