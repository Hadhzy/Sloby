export function getEveryNth(arr: Array<any>, nth: number) {
  const result = [];

  for (let i = 0; i < arr.length; i += nth) {
    result.push(arr[i + 1]);
  }

  return result;
}
