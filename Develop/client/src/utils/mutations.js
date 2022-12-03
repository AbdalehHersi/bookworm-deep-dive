import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      _id
    }
    token
  }
}
`;

export const ADD_USER = gql`
    mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
        _id
    }
  }
}
`;

export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: ID) {
  removeBook(bookId: $bookId) {
    _id
    bookCount
    savedBooks {
      title
    }
  }
}
`;

export const SAVE_BOOK = gql`
mutation SaveBook($book: BookInput) {
  saveBook(book: $book) {
    _id
  }
}`;