import type { Book } from "./Book";

export type BookHighlight = {
    book: Book;
    title: string;
    highlight: string;
}