export const getGame = /* GraphQL */ `
  query getGame($id: ID!) {
    getGame(id: $id) {
      id
      title
      description
      trailerURL
      imageKey
      price
      recommended_age
      release_date
      platform {
        name
        short_name
      }
      publisher {
        name
      }
      types {
        items {
          type {
            name
          }
        }
      }
    }
  }
`;

export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        imageKey
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
