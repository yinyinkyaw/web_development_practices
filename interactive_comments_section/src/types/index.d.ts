export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo?: string;
  user: User;
  replies?: Comment[] | [];
}

type IncreaseScore = { type: "increase"; payload: { comment_id: number } };
type DecreaseScore = { type: "decrease"; payload: { comment_id: number } };
type IncreaseReplyScore = {
  type: "increase_reply";
  payload: { comment_id: number; reply_comment_id: number };
};
type DecreaseReplyScore = {
  type: "decrease_reply";
  payload: { comment_id: number; reply_comment_id: number };
};
type CreateNewComment = {
  type: "new_comment";
  payload: Comment;
};
type AddReplyComment = {
  type: "add_reply_comment";
  payload: {
    comment_id: number;
    comment_text: string;
    replyTo: string;
  };
};
type DeleteReplyComment = {
  type: "delete_reply";
  payload: {
    comment_id: number;
    reply_comment_id: number;
  };
};
type DeleteComment = {
  type: "delete_comment";
  payload: { comment_id: number };
};
type EditReplyComment = {
  type: "edit_reply_comment";
  payload: { comment_id: number; reply_id: number; comment_text: string };
};
type EditComment = {
  type: "edit_comment";
  payload: { comment_id: number; comment_text: string };
};
export type CommentAction =
  | IncreaseScore
  | DecreaseScore
  | IncreaseReplyScore
  | DecreaseReplyScore
  | CreateNewComment
  | AddReplyComment
  | DeleteReplyComment
  | DeleteComment
  | EditReplyComment
  | EditComment;
