/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlatform = /* GraphQL */ `
  query GetPlatform($id: ID!) {
    getPlatform(id: $id) {
      id
      name
      short_name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      games {
        items {
          id
          title
          description
          trailerURL
          imageKey
          price
          recommanded_age
          release_date
          publisher_id
          platform_id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listPlatforms = /* GraphQL */ `
  query ListPlatforms(
    $filter: ModelPlatformFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlatforms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        short_name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        games {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlatforms = /* GraphQL */ `
  query SyncPlatforms(
    $filter: ModelPlatformFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlatforms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        short_name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        games {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getPublisher = /* GraphQL */ `
  query GetPublisher($id: ID!) {
    getPublisher(id: $id) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      games {
        items {
          id
          title
          description
          trailerURL
          imageKey
          price
          recommanded_age
          release_date
          publisher_id
          platform_id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listPublishers = /* GraphQL */ `
  query ListPublishers(
    $filter: ModelPublisherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublishers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        games {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPublishers = /* GraphQL */ `
  query SyncPublishers(
    $filter: ModelPublisherFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPublishers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        games {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      title
      description
      trailerURL
      imageKey
      price
      recommanded_age
      release_date
      publisher_id
      platform_id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      platform {
        id
        name
        short_name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        games {
          nextToken
          startedAt
        }
      }
      publisher {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        games {
          nextToken
          startedAt
        }
      }
      types {
        items {
          id
          game_id
          type_id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      orders {
        items {
          id
          game_id
          order_id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          customer
        }
        nextToken
        startedAt
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
        description
        trailerURL
        imageKey
        price
        recommanded_age
        release_date
        publisher_id
        platform_id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        platform {
          id
          name
          short_name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        publisher {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        types {
          nextToken
          startedAt
        }
        orders {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGames = /* GraphQL */ `
  query SyncGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        trailerURL
        imageKey
        price
        recommanded_age
        release_date
        publisher_id
        platform_id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        platform {
          id
          name
          short_name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        publisher {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        types {
          nextToken
          startedAt
        }
        orders {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getType = /* GraphQL */ `
  query GetType($id: ID!) {
    getType(id: $id) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      games {
        items {
          id
          game_id
          type_id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listTypes = /* GraphQL */ `
  query ListTypes(
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        games {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTypes = /* GraphQL */ `
  query SyncTypes(
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        games {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGameTypes = /* GraphQL */ `
  query SyncGameTypes(
    $filter: ModelGameTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGameTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        game_id
        type_id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        game {
          id
          title
          description
          trailerURL
          imageKey
          price
          recommanded_age
          release_date
          publisher_id
          platform_id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        type {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGameOrders = /* GraphQL */ `
  query SyncGameOrders(
    $filter: ModelGameOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGameOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        game_id
        order_id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        game {
          id
          title
          description
          trailerURL
          imageKey
          price
          recommanded_age
          release_date
          publisher_id
          platform_id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        customer
        order {
          id
          user
          date
          total
          country
          city
          zipCode
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      country
      city
      zipCode
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      games {
        items {
          id
          game_id
          order_id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          customer
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        country
        city
        zipCode
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        games {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        user
        date
        total
        country
        city
        zipCode
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        games {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
