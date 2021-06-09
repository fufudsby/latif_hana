import { gql } from '@apollo/client';

export const GET_MESSAGES = gql`
  query GetMessages {
    getMessages {
      name
      message
      createdAt
    }
  }
`

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($name: String!, $message: String!) {
    createMessage(name: $name, message: $message) {
      name
    }
  }
`