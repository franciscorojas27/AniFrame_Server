export interface ICacheRepository {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<void | null>;
  clear(): Promise<void>;
}
