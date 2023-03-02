export interface IResponse<T> {
    count: number,
    data: T[],
    success: boolean
}