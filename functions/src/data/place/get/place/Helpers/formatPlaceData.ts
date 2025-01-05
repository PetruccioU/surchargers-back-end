import { CustomRequestPlace } from '../DTO/GetPlaceRepositoryResponse';

export function formatPlaceData(data: any): CustomRequestPlace {
  return {
    id: data.id,
    displayName: {
      text: data.displayName?.text ?? '',
      languageCode: data.displayName?.languageCode ?? '',
    },
    addressComponents: (data.addressComponents ?? []).map((component: any) => ({
      longText: component.longText,
      shortText: component.shortText,
      types: component.types,
      languageCode: component.languageCode,
    })),
    location: {
      latitude: data.location?.latitude ?? 0,
      longitude: data.location?.longitude ?? 0,
    },
  };
}