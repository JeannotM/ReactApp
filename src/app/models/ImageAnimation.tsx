export default class ImageAnimation {
    constructor(prev: string, next: string) {
        this.Prev = prev;
        this.Next = next;
    }

    Prev: string;
    Next: string;

    StartAnimation(image1: Element | null, image2: Element | null, shown: string, image: string) {
        if (image1 == null || image2 == null) { return; }
        image1.className = this.Prev + " " + image;
        image2.className = this.Next + " " + image + " " + shown;
    }
}