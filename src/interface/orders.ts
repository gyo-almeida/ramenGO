export interface IOrderRequest{
    brothId: string,
    proteinId: string
}

export interface IOrderResponse{
    id:	string,
    description: string,
    image: string
}