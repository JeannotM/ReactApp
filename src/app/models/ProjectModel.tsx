import ImageContent from "./ImageContent";

export default class ProjectModel {
    constructor(name: string, description: string, content: { Image: string, Description: string }[], date: string, link: string) {
        this.Name = name;
        this.Description = description;
        this.Content = content;
        this.Date = date;
        this.Link = link;
    }

    Date: string;
    Description: string;
    Content: { Image: string, Description: string }[];
    Name: string;
    Link: string;
}