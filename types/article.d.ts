export interface BlogFaq {
  question: string;
  answer: string;
  order: number;
}

export interface Image {
  id: string;
  url: string;
  productId: string | null;
  blogArticleId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  content?: string;
  author: string;
  authorName?: string;
  createdAt: Date;
  updatedAt: Date;
  images: Image[];
  faq: BlogFaq[];
}
