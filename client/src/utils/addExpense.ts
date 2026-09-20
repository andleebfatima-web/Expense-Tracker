export function getLastItem<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}
