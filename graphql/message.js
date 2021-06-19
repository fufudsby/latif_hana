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

export const GET_ALL_MESSAGES = gql`
  query GetAllMessages {
    getAllMessages {
      id
      name
      message
      isActive
      createdAt
    }
  }
`

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($name: String!, $message: String!) {
    createMessage(name: $name, message: $message) {
      name
      message
    }
  }
`

export const UPDATE_MESSAGE = gql`
  mutation UpdateMessage($messageId: ID!, $isActive: Boolean!) {
    updateMessage(messageId: $messageId, isActive: $isActive) {
      isActive
    }
  }
`