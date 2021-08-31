/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createPlatform = /* GraphQL */ `
  mutation CreatePlatform(
    $input: CreatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    createPlatform(input: $input, condition: $condition) {
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
export const updatePlatform = /* GraphQL */ `
  mutation UpdatePlatform(
    $input: UpdatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    updatePlatform(input: $input, condition: $condition) {
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
export const deletePlatform = /* GraphQL */ `
  mutation DeletePlatform(
    $input: DeletePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    deletePlatform(input: $input, condition: $condition) {
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
export const createPublisher = /* GraphQL */ `
  mutation CreatePublisher(
    $input: CreatePublisherInput!
    $condition: ModelPublisherConditionInput
  ) {
    createPublisher(input: $input, condition: $condition) {
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
export const updatePublisher = /* GraphQL */ `
  mutation UpdatePublisher(
    $input: UpdatePublisherInput!
    $condition: ModelPublisherConditionInput
  ) {
    updatePublisher(input: $input, condition: $condition) {
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
export const deletePublisher = /* GraphQL */ `
  mutation DeletePublisher(
    $input: DeletePublisherInput!
    $condition: ModelPublisherConditionInput
  ) {
    deletePublisher(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createType = /* GraphQL */ `
  mutation CreateType(
    $input: CreateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    createType(input: $input, condition: $condition) {
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
export const updateType = /* GraphQL */ `
  mutation UpdateType(
    $input: UpdateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    updateType(input: $input, condition: $condition) {
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
export const deleteType = /* GraphQL */ `
  mutation DeleteType(
    $input: DeleteTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    deleteType(input: $input, condition: $condition) {
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
export const createGameType = /* GraphQL */ `
  mutation CreateGameType(
    $input: CreateGameTypeInput!
    $condition: ModelGameTypeConditionInput
  ) {
    createGameType(input: $input, condition: $condition) {
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
      type {
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
    }
  }
`;
export const updateGameType = /* GraphQL */ `
  mutation UpdateGameType(
    $input: UpdateGameTypeInput!
    $condition: ModelGameTypeConditionInput
  ) {
    updateGameType(input: $input, condition: $condition) {
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
      type {
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
    }
  }
`;
export const deleteGameType = /* GraphQL */ `
  mutation DeleteGameType(
    $input: DeleteGameTypeInput!
    $condition: ModelGameTypeConditionInput
  ) {
    deleteGameType(input: $input, condition: $condition) {
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
      type {
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
    }
  }
`;
export const createGameOrder = /* GraphQL */ `
  mutation CreateGameOrder(
    $input: CreateGameOrderInput!
    $condition: ModelGameOrderConditionInput
  ) {
    createGameOrder(input: $input, condition: $condition) {
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
        games {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateGameOrder = /* GraphQL */ `
  mutation UpdateGameOrder(
    $input: UpdateGameOrderInput!
    $condition: ModelGameOrderConditionInput
  ) {
    updateGameOrder(input: $input, condition: $condition) {
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
        games {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteGameOrder = /* GraphQL */ `
  mutation DeleteGameOrder(
    $input: DeleteGameOrderInput!
    $condition: ModelGameOrderConditionInput
  ) {
    deleteGameOrder(input: $input, condition: $condition) {
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
        games {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
