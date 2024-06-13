import { useRef, useState } from "react";
import { Comment } from "../../types";
import * as CommentCardStyle from "./CommentCard.styles";

type CommentCardProps = {
  info: Comment;
  isReply?: boolean;
  currentUser: string;
  onIncrease: () => void;
  onDecrease: () => void;
  handleReply: (commentId: number) => void;
  handleDelete: () => void;
  handleEdit: (updatedText: string) => void;
};

const CommentCard = ({
  info,
  isReply = false,
  currentUser,
  onIncrease,
  onDecrease,
  handleReply,
  handleDelete,
  handleEdit,
}: CommentCardProps) => {
  const [isEditComment, setIsEditComment] = useState(false);
  const commentRef = useRef(null);

  const commentText = info?.replyingTo
    ? `@${info?.replyingTo} ${info?.content}`
    : info?.content;
  return (
    <>
      <div
        css={CommentCardStyle.commentCardContainer({
          isReplyComment: isReply,
        })}
      >
        <div css={CommentCardStyle.commentCardScore}>
          <button onClick={onIncrease}>+</button>
          <h3>{info?.score}</h3>
          <button onClick={onDecrease}>-</button>
        </div>
        <div>
          <div css={CommentCardStyle.commentCardProfile}>
            <img src={info?.user?.image?.png} />
            <h4>{info?.user.username}</h4>
            {info?.user.username === currentUser && <div>you</div>}
            <strong>{info?.createdAt}</strong>
          </div>
          {isEditComment ? (
            <div css={CommentCardStyle.commentCardEditAreaContainer}>
              <textarea rows={5} defaultValue={commentText} ref={commentRef} />
              <button
                onClick={() => {
                  handleEdit(commentRef.current?.value);
                  setIsEditComment(false);
                }}
              >
                update
              </button>
            </div>
          ) : (
            <p css={CommentCardStyle.commentCardContent}>
              {info?.replyingTo && <span>@{info?.replyingTo} </span>}
              {info?.content}
            </p>
          )}
        </div>
        {info?.user.username === currentUser ? (
          <div css={CommentCardStyle.commentCardActions}>
            <button className="delete" onClick={handleDelete}>
              <img src={"../images/icon-delete.svg"} />
              delete
            </button>
            <button onClick={() => setIsEditComment((prev) => !prev)}>
              <img src={"../images/icon-edit.svg"} />
              edit
            </button>
          </div>
        ) : (
          <button
            css={CommentCardStyle.commentReplyButton}
            onClick={() => handleReply(info?.id)}
          >
            <img src={"../images/icon-reply.svg"} />
            reply
          </button>
        )}
      </div>
    </>
  );
};

export default CommentCard;
