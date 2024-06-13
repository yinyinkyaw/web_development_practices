import "./App.css";
import post from "../data.json";
import "@fontsource/rubik";
import { css } from "@emotion/react";
import CommentCard from "./components/Comments/CommentCard";
import ReplyForm from "./components/Reply/ReplyForm";
import { useReducer, useState } from "react";
import commentReducer from "./reducers/commentReducer";
import NewCommentForm from "./components/Reply/NewCommentForm";
import { commentIdList } from "./utils";

function CommentList() {
  const [data, dispatch] = useReducer(commentReducer, post);
  const [showCommentReplys, setShowCommentReplys] = useState<
    { comment_id: number; isReply: boolean }[]
  >([
    {
      comment_id: 2,
      isReply: false,
    },
  ]);

  const handleShowReply = (commentId: number) => {
    const index = showCommentReplys?.findIndex(
      (info) => info?.comment_id === commentId
    );
    if (index < 0) {
      setShowCommentReplys([
        ...showCommentReplys,
        { comment_id: commentId, isReply: true },
      ]);

      return;
    }

    let commentReplyInfo = showCommentReplys;

    commentReplyInfo[index] = {
      comment_id: commentId,
      isReply: !showCommentReplys[index]?.isReply,
    };
    setShowCommentReplys([...commentReplyInfo]);
  };

  const handleReply = ({
    text,
    commentId,
    replyTo,
    replyId,
  }: {
    text: string;
    commentId: number;
    replyTo: string;
    replyId: number;
  }) => {
    dispatch({
      type: "add_reply_comment",
      payload: {
        comment_text: text,
        comment_id: commentId,
        replyTo,
      },
    });
    handleShowReply(replyId);
  };

  const onAddComment = (content: string) => {
    const maxId = Math.max(...commentIdList(data.comments));
    dispatch({
      type: "new_comment",
      payload: {
        id: maxId + 1,
        content,
        createdAt: "just now",
        score: 0,
        user: data.currentUser,
        replies: [],
      },
    });
  };

  return (
    <div css={sectionContainer}>
      {data.comments?.map((comment) => (
        <div key={comment?.id}>
          <CommentCard
            info={comment}
            key={comment?.id}
            currentUser={post.currentUser.username}
            onIncrease={() =>
              dispatch({
                type: "increase",
                payload: { comment_id: comment.id },
              })
            }
            onDecrease={() =>
              dispatch({
                type: "decrease",
                payload: { comment_id: comment.id },
              })
            }
            handleReply={handleShowReply}
            handleDelete={() =>
              dispatch({
                type: "delete_comment",
                payload: { comment_id: comment?.id },
              })
            }
            handleEdit={(text: string) => {
              dispatch({
                type: "edit_comment",
                payload: { comment_id: comment?.id, comment_text: text },
              });
            }}
          />
          {Array.isArray(comment?.replies) && comment?.replies?.length > 0
            ? comment?.replies?.map((reply) => (
                <div css={nestedReplyList} key={reply?.id}>
                  <div css={replyLine}>
                    <span />
                  </div>
                  <div css={replyComments}>
                    <CommentCard
                      info={reply}
                      key={reply?.id}
                      isReply
                      currentUser={post.currentUser.username}
                      onIncrease={() =>
                        dispatch({
                          type: "increase_reply",
                          payload: {
                            comment_id: comment.id,
                            reply_comment_id: reply.id,
                          },
                        })
                      }
                      onDecrease={() =>
                        dispatch({
                          type: "decrease_reply",
                          payload: {
                            comment_id: comment.id,
                            reply_comment_id: reply.id,
                          },
                        })
                      }
                      handleDelete={() => {
                        dispatch({
                          type: "delete_reply",
                          payload: {
                            comment_id: comment.id,
                            reply_comment_id: reply.id,
                          },
                        });
                      }}
                      handleReply={handleShowReply}
                      handleEdit={(text: string) => {
                        dispatch({
                          type: "edit_reply_comment",
                          payload: {
                            comment_id: comment?.id,
                            reply_id: reply?.id,
                            comment_text: text,
                          },
                        });
                      }}
                    />
                    {showCommentReplys?.length &&
                      showCommentReplys?.map((info) =>
                        info?.comment_id === reply?.id && info?.isReply ? (
                          <ReplyForm
                            key={info?.comment_id}
                            commentId={comment?.id}
                            replyTo={reply?.user.username}
                            replyId={reply?.id}
                            onReply={handleReply}
                          />
                        ) : null
                      )}
                  </div>
                </div>
              ))
            : null}
          {showCommentReplys?.length > 0 &&
            showCommentReplys?.map((info) =>
              info?.comment_id === comment?.id && info?.isReply ? (
                <ReplyForm
                  key={info?.comment_id}
                  commentId={comment?.id}
                  replyTo={comment?.user.username}
                  replyId={comment?.id}
                  onReply={handleReply}
                />
              ) : null
            )}
        </div>
      ))}
      <NewCommentForm handleComment={onAddComment} />
    </div>
  );
}

const sectionContainer = css`
  margin: 15px auto;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const replyComments = css`
  display: flex;
  flex-direction: column;
  width: calc(100% - 100px);
`;

const replyLine = css`
  width: 100px;
  display: flex;
  justify-content: center;
  height: 100%;
  span {
    width: 2px;
    height: 100%;
    background-color: hsl(211, 10%, 85%);
  }
`;

const nestedReplyList = css`
  display: flex;
`;
export default CommentList;
