export interface IOperation<T> {
    data: T,
    operationType: OperationType
}

export enum OperationType {
    ADD = "ADD",
    EDIT = "EDIT",
    DELETE = "DELETE"
}