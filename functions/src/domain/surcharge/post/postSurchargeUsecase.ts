import { PostSurchargeRepo } from "@data/surcharge";
import { PostSurchargeUsecaseRequest } from "./entity/PostSurchargeUsecaseRequest";
import { PostSurchargeRepositoryRequest } from "@data/surcharge";
import { rateCalculatorHelper } from "../helpers/rateCalculatorHelper";
import { SurchargeStatus } from "@data/surcharge"

export const postSurchargeUsecase = async (request: PostSurchargeUsecaseRequest): Promise<void> => {
  try {
  
    // Map the Request object to PostSurchargeRepositoryRequest
    const rate = rateCalculatorHelper(
      request.rate ?? 0, // Default to 0 if undefined
      request.totalAmount ?? 0, // Default to 0 if undefined
      request.surchargeAmount ?? 0 // Default to 0 if undefined
    )
    
    const surcharge: PostSurchargeRepositoryRequest = {
        place: request.place,
        image: request.image,
        rate: rate,
        totalAmount: request.totalAmount ?? 0,
        surchargeAmount: request.surchargeAmount ?? 0,
        surchargeStatus: SurchargeStatus.REPORTED 
    }

    // Call the repository function
    return await PostSurchargeRepo(surcharge)
  } catch (error) {
      console.error("Error in use case:", error);
      throw error;
  }
};