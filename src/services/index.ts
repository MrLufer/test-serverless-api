import axios from "axios";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { translate } from "../utils";

const docClient = new DocumentClient();
const TableName = "yourTableName";

export const getPeopleService = async (number) => {
  try {
    const url = `https://swapi.py4e.com/api/people/${number}/`;

    const response = await axios.get(url);
    const person = translate(response.data);

    return {
      statusCode: 200,
      body: person,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error en la solicitud" }),
    };
  }
};

export const createFavoriteService = async (favorite: any) => {
  try {
    await docClient
      .put({
        TableName,
        Item: favorite,
      })
      .promise();

    return favorite;
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error en la solicitud" }),
    };
  }
};

export const getFavoriteService = async () => {
  try {
    const result = await docClient
      .scan({
        TableName,
      })
      .promise();

    return {
      statusCode: 200,
      body: result,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error en la solicitud" }),
    };
  }
};
