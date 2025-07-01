import axios from "./axios";

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  postId: string;
}

interface PatchCommentPayload {
  content: string;
}

export async function patchComment(commentId: string, { content }: PatchCommentPayload): Promise<Comment> {
  const response = await axios.patch<Comment>(`/comments/${commentId}`, { content });
  return response.data;
}

export async function deleteComment(commentId: string): Promise<void> {
  await axios.delete(`/comments/${commentId}`);
}
