import * as shortid from "shortid";

class Bookmark {
  public id: string;
  public title: string;
  public content: string;
  public link: string;

  constructor(title: string, content: string, link: string) {
    this.id = shortid.generate();
    this.title = title;
    this.content = content;
    this.link = link;
  }
}

export default Bookmark;
