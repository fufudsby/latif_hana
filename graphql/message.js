import { gql } from '@apollo/client';

export const GET_MESSAGES = gql`
  query GetMessages($first: Int!, $page: Int!) {
    getMessages(first: $first, page: $page) {
      name
      message
      createdAt
    }
  }
`

export const GET_ALL_MESSAGES = gql`
  query GetAllMessages($first: Int!, $page: Int!) {
    getAllMessages(first: $first, page: $page) {
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