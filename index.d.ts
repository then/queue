declare class ThenQueue<T> {
  readonly length: number;
  push(item: T | Promise<T>): void;
  shift(): Promise<T>
}
export default ThenQueue;