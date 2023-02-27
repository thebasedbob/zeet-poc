import { GraphQLClient, gql } from 'graphql-request';
import * as dotenv from 'dotenv'
dotenv.config()

const zeetClient = new GraphQLClient(process.env.ZEET_API_ENDPOINT as string, {
  headers: {
    authorization: `Bearer ${process.env.ZEET_API_KEY}`,
  },
});

export default zeetClient;