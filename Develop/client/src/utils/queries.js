import { gql } from "@apollo/client";

export const GET_ME = gql`
query Me {
  me {
    _id
    bookCount
    savedBooks {
      authors
      description
      title
      image
      link
    }
  }
}
`;