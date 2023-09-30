import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import {
  createFavoriteService,
  getFavoriteService,
  getPeopleService,
} from "../services";
import { v4 } from "uuid";

export const getPeople = middyfy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const number = event.pathParameters.number;
    const poeple = await getPeopleService(number);
    return formatJSONResponse(poeple);
  }
);

export const createFavorite = middyfy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
      const id = v4();
      const favorite = await createFavoriteService({
        favoriteId: id,
      });
      return formatJSONResponse(favorite);
    } catch (e) {
      return formatJSONResponse({
        status: 500,
        message: e,
      });
    }
  }
);

export const getFavorites = middyfy(
  async (): Promise<APIGatewayProxyResult> => {
    const poeple = await getFavoriteService();
    return formatJSONResponse(poeple);
  }
);
