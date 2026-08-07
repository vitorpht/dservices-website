export type AboutContent = {
  title: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  };
  highlights: Array<{
    label: string;
    value: string;
  }>;
};
