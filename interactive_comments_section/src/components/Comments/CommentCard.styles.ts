import { css } from "@emotion/react";

export const commentCard = css`
  width: 100%;
  display: flex;
  height: 100%;
`;

export const commentCardContainer = ({
  isReplyComment,
}: {
  isReplyComment: boolean;
}) => css`
  background-color: #fff;
  border-radius: 6px;
  padding: 25px 25px;
  width: 100%;
  display: grid;
  grid-template-columns: 45px auto;
  column-gap: 20px;
  position: relative;
  margin-bottom: 20px;
  ${isReplyComment && ""}
`;

export const commentCardScore = css`
  width: 40px;
  height: fit-content;
  background-color: hsl(223, 19%, 93%);
  display: grid;
  grid-template-rows: repeat(3, 30px);
  place-items: center;
  border-radius: 6px;
  color: hsl(238, 40%, 52%);
  font-weight: bold;
  button {
    color: hsl(211, 10%, 45%);
    cursor: pointer;
  }
`;

export const commentCardProfile = css`
  display: flex;
  column-gap: 15px;
  align-items: center;
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
  h4 {
    margin: 0;
    font-weight: bold;
  }
  strong {
    color: hsl(211, 10%, 45%);
  }
  div {
    padding: 2px 8px;
    background-color: hsl(238, 40%, 52%);
    color: white;
    border-radius: 4px;
    font-size: 14px;
  }
`;

export const commentCardContent = css`
  color: hsl(211, 10%, 45%);
  text-align: left;
  span {
    color: hsl(238, 40%, 52%);
    font-weight: bold;
  }
`;

export const commentReplyButton = css`
  position: absolute;
  color: hsl(238, 40%, 52%);
  top: 25px;
  right: 25px;
  text-transform: capitalize;
  img {
    margin-right: 5px;
  }
`;

export const commentCardActions = css`
  position: absolute;
  top: 25px;
  right: 25px;
  display: flex;
  column-gap: 15px;
  align-items: center;
  button {
    color: hsl(238, 40%, 52%);
    text-transform: capitalize;
    &.delete {
      color: hsl(358, 79%, 66%);
    }
    img {
      margin-right: 5px;
    }
  }
`;

export const commentCardEditAreaContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  textarea {
    background-color: white;
    border-radius: 5px;
    color: hsl(211, 10%, 45%);
    padding: 10px;
    border: 1px solid hsl(239, 57%, 85%);
    margin: 10px 0;
    width: 98%;
    &:focus {
      border: 1px solid hsl(239, 57%, 85%);
    }
  }
  button {
    background-color: hsl(238, 40%, 52%);
    color: white;
    border-radius: 6px;
    width: 100px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
  }
`;

export const commentCardEditTextAreas = css`
  background-color: white;
  border-radius: 5px;
  color: hsl(211, 10%, 45%);
  padding: 10px;
  border: 1px solid hsl(239, 57%, 85%);
  margin: 10px 0;
  width: 98%;
  &:focus {
    border: 1px solid hsl(239, 57%, 85%);
  }
`;
