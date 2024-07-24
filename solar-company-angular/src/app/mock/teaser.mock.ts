import {Teaser} from "../models/teaser.model";

export const TEASERS: Teaser[] = [
  {
    id: "page12345",
    title: "Lorem ipsum dolor sit amet",
    abstract: "Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu …",
    spotlight: false,
    image: "/assets/sample-2.jpg"
  },
  {
    id: "page2345",
    title: "Lorem ipsum ",
    abstract: "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben …",
    spotlight: true,
    image: "/assets/sample-2.jpg"
  },
  {
    id: "page2346",
    title: "Lorem ipsum dolor sit amet",
    abstract: "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben …",
    spotlight: true,
    image: "/assets/sample-1.jpg"
  },
  {
    id: "page2347",
    title: "Sit amet",
    abstract: "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben …",
    spotlight: true,
    image: "/assets/sample-4.jpg"
  }
];

export const SPOTLIGHT_TEASERS: Teaser[] = [
  TEASERS[1], TEASERS[2], TEASERS[3]
];

export const SINGLE_TEASER: Teaser = {
  id: "page12345",
  title: "Lorem ipsum dolor sit amet",
  abstract: "Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu …",
  spotlight: false,
  image: "/assets/sample-2.jpg"
};
