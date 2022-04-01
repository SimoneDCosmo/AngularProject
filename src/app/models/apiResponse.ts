export interface APIResponse<T> {
    results: Array<T>;
    count: number;
}