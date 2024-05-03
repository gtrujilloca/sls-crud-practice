import { QueryCommand } from '@aws-sdk/lib-dynamodb'
import { getDynamoDocClient } from '../../shared/config-db.mjs'

const docClient = getDynamoDocClient()
export async function getUser (event, context) {
  const userId = event.pathParameters?.id
  const command = new QueryCommand({
    TableName: process.env.DYNAMODB_USERS_TABLE,
    KeyConditionExpression: 'pk = :pk',
    ExpressionAttributeValues: {
      ':pk': userId
    }
  })

  try {
    const result = await docClient.send(command)

    return {
      statusCode: 200,
      body: JSON.stringify({ user: result })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error })
    }
  }
}
