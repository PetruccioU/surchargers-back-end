export type GetSurchargeResponse = {
  id: string,
  picture: string,
  placeInformation: string;
  rate: number,
  reportedDate: number
  totalAmount?: number,
  surchargeAmount?: number,
  purchaseAmount?: number
}