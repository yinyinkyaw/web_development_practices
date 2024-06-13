import { Comment, CommentAction, User } from "../types";
import { commentIdList } from "../utils";

export default function commentReducer(
  state: {
    currentUser: User;
    comments: Comment[];
  },
  action: CommentAction
) {
  const { type, payload } = action;
  switch (type) {
    case "increase": {
      const modifiedComments = state.comments.map((comment: Comment) =>
        comment.id === payload.comment_id
          ? { ...comment, score: comment.score + 1 }
          : comment
      );
      return {
        currentUser: state.currentUser,
        comments: modifiedComments,
      };
    }
    case "decrease": {
      const modifiedComments = state.comments.map((comment: Comment) =>
        comment.id === payload.comment_id
          ? { ...comment, score: comment.score - 1 }
          : comment
      );
      return {
        currentUser: state.currentUser,
        comments: modifiedComments,
      };
    }
    case "increase_reply": {
      const commentIndex = state.comments.findIndex(
        (el) => el.id === payload.comment_id
      );

      if (commentIndex < 0) {
        return state;
      }

      const modifiedComments = state.comments.map((comment) => {
        if (payload.comment_id === comment.id) {
          const modifiedReplies = comment.replies?.map((reply) => {
            if (reply.id === payload.reply_comment_id) {
              return { ...reply, score: reply.score + 1 };
            } else {
              return reply;
            }
          });
          return {
            ...comment,
            replies: modifiedReplies,
          };
        } else {
          return comment;
        }
      });
      return {
        currentUser: state.currentUser,
        comments: modifiedComments,
      };
    }
    case "decrease_reply": {
      const commentIndex = state.comments.findIndex(
        (el) => el.id === payload.comment_id
      );
      if (commentIndex < 0) {
        return state;
      }
      const modifiedComments = state.comments.map((comment) => {
        if (payload.comment_id === comment.id) {
          const modifiedReplies = comment.replies?.map((reply) => {
            if (reply.id === payload.reply_comment_id) {
              return { ...reply, score: reply.score - 1 };
            } else {
              return reply;
            }
          });
          return {
            ...comment,
            replies: modifiedReplies,
          };
        } else {
          return comment;
        }
      });
      return {
        currentUser: state.currentUser,
        comments: modifiedComments,
      };
    }
    case "new_comment": {
      return {
        currentUser: state.currentUser,
        comments: [...state.comments, payload],
      };
    }
    case "delete_comment": {
      const modifiedComments = state.comments.filter(
        (comment) => comment.id !== payload.comment_id
      );
      return {
        currentUser: state.currentUser,
        comments: modifiedComments,
      };
    }
    case "add_reply_comment": {
      const commentIndex = state.comments.findIndex(
        (el) => el.id === payload.comment_id
      );
      if (commentIndex < 0) {
        return state;
      }

      const maxId = Math.max(...commentIdList(state.comments));

      const replyComment = {
        id: maxId + 1,
        content: payload.comment_text,
        createdAt: "just now",
        score: 0,
        replyingTo: payload.replyTo,
        user: state.currentUser,
      };
      const modifiedComments = state.comments.map((comment) => {
        if (payload.comment_id === comment.id) {
          return {
            ...comment,
            replies: comment?.replies
              ? [...comment.replies, replyComment]
              : [replyComment],
          };
        } else {
          return comment;
        }
      });

      console.log("modified comments::", modifiedComments);
      return {
        currentUser: state.currentUser,
        comments: modifiedComments,
      };
    }
    case "delete_reply": {
      console.log("click delete reply");
      const commentIndex = state.comments.findIndex(
        (el) => el.id === payload.comment_id
      );

      if (commentIndex < 0) {
        return state;
      }

      const modifiedComments = state.comments.map((comment) => {
        if (comment.id === payload.comment_id) {
          return {
            ...comment,
            replies: comment.replies?.filter(
              (replyEl) => replyEl.id !== payload.reply_comment_id
            ),
          };
        } else {
          return comment;
        }
      });

      return {
        currentUser: state.currentUser,
        comments: modifiedComments,
      };
    }
    case "edit_reply_comment": {
      const commentIndex = state.comments?.findIndex(
        (comment) => comment.id === payload.comment_id
      );

      if (commentIndex < 0) {
        return state;
      }

      const modifiedComments = state.comments?.map((comment) => {
        if (comment.id === payload.comment_id) {
          return {
            ...comment,
            replies: comment.replies?.map((reply) => {
              if (reply.id === payload.reply_id) {
                return {
                  ...reply,
                  content: payload.comment_text,
                  createdAt: "just now",
                };
              } else {
                return reply;
              }
            }),
          };
        } else {
          return comment;
        }
      });
      return {
        currentUser: state.currentUser,
        comments: modifiedComments,
      };
    }
    case "edit_comment": {
      const commentIndex = state.comments.findIndex(
        (comment) => comment.id === payload.comment_id
      );

      if (commentIndex < 0) {
        return state;
      }

      const modifiedComments = state.comments?.map((comment) => {
        if (comment.id === payload.comment_id) {
          return {
            ...comment,
            content: payload.comment_text,
            createdAt: "just now",
          };
        } else {
          return comment;
        }
      });

      return {
        currentUser: state.currentUser,
        comments: modifiedComments,
      };
    }
    default:
      return state;
  }
}
