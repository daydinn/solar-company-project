import {Page, PageTree} from "../models/page.model";

export const PAGE_HOME: Page = {
  id: "home",
  name: "Home",
    content: [
    {
      id: "2w386754",
      type: "CAROUSEL",
      content: null,
      config: {
        show: "spotlight"
      }
    }, {
      id: "element987dxfgz7",
      type: "TEASER",
      content: "page12345",
      config: null
    }, {
      id: "element0j9ibdfg0",
      type: "NEWS_LIST",
      content: null,
      config: {
        size: 7
      }
    }
    ]
}

export const PAGE_TREE: PageTree = {
  navigation: [
    {
      id: "home",
      name: "Home"
    },
    {
      id: "network",
      name: "Our Network"
    },
    {
      id: "sites",
      name: "Sites"
    },
    {
      id: "projects",
      name: "Projects"
    },
    {
      id: "news",
      name: "News"
    }
  ],
  landing: "home"
}
