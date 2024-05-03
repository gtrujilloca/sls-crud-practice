import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'
import { config } from 'dotenv'
import { getDynamoBdParams } from '../shared/utils.mjs'

config()

const dynamoDBConnectionParams = getDynamoBdParams()

export function getDynamoDocClient () {
  const client = new DynamoDBClient(dynamoDBConnectionParams)
  return DynamoDBDocumentClient.from(client)
}
