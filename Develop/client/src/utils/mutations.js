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