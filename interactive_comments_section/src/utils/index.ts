import { Comment } from "../types";

export const commentIdList = (comments: Comment[]) => {
  const numArr = comments?.map((info) =>
    Array.isArray(info?.replies) && info?.replies?.length > 0
      ? [info?.id, info?.replies?.map((el) => el.id)]
      : info?.id
  );

  return numArr.flat(2);
};
