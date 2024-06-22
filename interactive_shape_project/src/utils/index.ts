export function changeBoxStatus(
  nestedArr: Array<Array<number>>,
  filterFn: (row: Array<number>, rowId: number) => Array<number>
) {
  const result: Array<Array<number>> = [];

  nestedArr?.forEach((row, index) => {
    result.push(filterFn(row, index));
  });

  return result;
}

export function getNestedArrSize(array: Array<Array<number>>) {
  return array?.reduce((total, row) => total + row.length, 0);
}
