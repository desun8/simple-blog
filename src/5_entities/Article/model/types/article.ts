export const enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}
export type ArticleBlockBase = {
  id: string;
  type: ArticleBlockType;
};
export type ArticleBlockText = {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
} & ArticleBlockBase;

export type ArticleBlockCode = {
  type: ArticleBlockType.CODE;
  code: string;
} & ArticleBlockBase;

export type ArticleBlockImage = {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
} & ArticleBlockBase;

export type ArticleBlock =
  | ArticleBlockText
  | ArticleBlockCode
  | ArticleBlockImage;

export const enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export type Article = {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
};
