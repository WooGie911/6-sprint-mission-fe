export interface Comment {
  id: string;
  content: string;
  updatedAt: string;
  writer: {
    id: string;
    nickname: string;
    image?: string;
  };
}
