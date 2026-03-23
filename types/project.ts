export type ImageSection = {
  type: "image";
  src: string;
  alt: string;
};

export type TextSection = {
  type: "text";
  title?: string;
  paragraphs?: string[];
  list?: string[];
};

export type ContentSection = ImageSection | TextSection;

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  stack?: string[];
  thumbnail: string;
  siteUrl?: string;
  shortDescription: string;
  promise: string;
  sections: ContentSection[];
};
