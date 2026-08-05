export type Book = {
    order?: string;
    seriesTitle?: string;
    title: string;
    imgSrc: string;
    preorderImgSrc?: string;
    preorderLink?: string;
    description: string;
    link: string;
    goodreadsLink: string;
    amazonLink: string;
    excludeContentWarnings?: boolean;
}