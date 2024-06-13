import { css } from "@emotion/react";

export const replyFormContainer = css`
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
  padding: 25px;
  display: grid;
  grid-template-columns: 35px auto 100px;
  column-gap: 20px;
  margin-bottom: 10px;
  img {
    width: 35px;
    height: 35px;
  }
  textarea {
    background-color: white;
    border-radius: 5px;
    color: hsl(211, 10%, 45%);
    padding: 10px;
    border: 1px solid hsl(239, 57%, 85%);
    &:focus {
      border: 1px solid hsl(239, 57%, 85%);
    }
  }
  button {
    background-color: hsl(238, 40%, 52%);
    color: white;
    border-radius: 6px;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
  }
`;
