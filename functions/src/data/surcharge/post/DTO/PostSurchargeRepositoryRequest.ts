interface LatLngDTO {
  latitude: number,
  longitude: number
}

interface LocalizedTextDTO {
  text: string,
  languageCode: string
}

interface AddressComponentsDTO {
  longText: string,
  shortText: string,
  types: string[],
  languageCode: string
}

interface CustomRequestPlace {
  id: string;
  displayName: LocalizedTextDTO,
  addressComponents: AddressComponentsDTO,
  location: LatLngDTO
}

export enum SurchargeStatus {
  REPORTED = 'REPORTED',
  CONFIRMED = 'CONFIRMED',
  UNKNOWN = 'UNKNOWN'
}

export type PostSurchargeRepositoryRequest = {
  place: CustomRequestPlace,
  image: string,
  rate: number,
  totalAmount?: number,
  surchargeAmount?: number,
  surchargeStatus: SurchargeStatus
}