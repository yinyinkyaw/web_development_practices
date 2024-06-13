import * as ReplyFormStyle from "./ReplyForm.styles";
import data from "../../../data.json";
import { FC, useRef } from "react";

type ReplyFormProps = {
  commentId: number;
  replyTo: string;
  replyId: number;
  onReply: ({
    text,
    commentId,
    replyTo,
  }: {
    text: string;
    commentId: number;
    replyTo: string;
    replyId: number;
  }) => void;
};
const ReplyForm: FC<ReplyFormProps> = ({
  replyTo,
  onReply,
  commentId,
  replyId,
}) => {
  const userInfo = data.currentUser;
  const commentRef = useRef(null);

  return (
    <div css={ReplyFormStyle.replyFormContainer}>
      <img src={userInfo?.image.png} alt={userInfo?.username} />
      <textarea
        rows={5}
        placeholder="Add a comment..."
        defaultValue={`@${replyTo} `}
        ref={commentRef}
      />
      <button
        onClick={() =>
          onReply({
            commentId,
            replyTo,
            text: commentRef.current?.value.split(`@${replyTo} `)[1],
            replyId,
          })
        }
      >
        reply
      </button>
    </div>
  );
};

export default ReplyForm;
