import * as shortid from "shortid";

class Bookmark {
  public id: string;
  public title: string;
  public link: string;

  constructor(title: string, link: string) {
    this.id = shortid.generate();
    this.title = title;
    this.link = link;
  }
}

export default Bookmark;