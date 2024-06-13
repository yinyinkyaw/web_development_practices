import * as ReplyFormStyle from "./ReplyForm.styles";
import post from "../../../data.json";
import { FC, useRef } from "react";

type NewCommentFormProps = {
  handleComment: (text: string) => void;
};
const NewCommentForm: FC<NewCommentFormProps> = ({ handleComment }) => {
  const userInfo = post.currentUser;

  const commentContent = useRef(null);

  return (
    <div css={ReplyFormStyle.replyFormContainer}>
      <img src={userInfo?.image?.png} alt={userInfo?.username} />
      <textarea rows={5} placeholder="Add a comment" ref={commentContent} />
      <button
        onClick={() => {
          handleComment(commentContent.current?.value);
          commentContent.current.value = "";
        }}
      >
        send
      </button>
    </div>
  );
};

export default NewCommentForm;
