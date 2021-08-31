/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlatform = /* GraphQL */ `
  subscription OnCreatePlatform {
    onCreatePlatform {
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
export const onUpdatePlatform = /* GraphQL */ `
  subscription OnUpdatePlatform {
    onUpdatePlatform {
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
export const onDeletePlatform = /* GraphQL */ `
  subscription OnDeletePlatform {
    onDeletePlatform {
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
export const onCreatePublisher = /* GraphQL */ `
  subscription OnCreatePublisher {
    onCreatePublisher {
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
export const onUpdatePublisher = /* GraphQL */ `
  subscription OnUpdatePublisher {
    onUpdatePublisher {
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
export const onDeletePublisher = /* GraphQL */ `
  subscription OnDeletePublisher {
    onDeletePublisher {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreateType = /* GraphQL */ `
  subscription OnCreateType {
    onCreateType {
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
export const onUpdateType = /* GraphQL */ `
  subscription OnUpdateType {
    onUpdateType {
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
export const onDeleteType = /* GraphQL */ `
  subscription OnDeleteType {
    onDeleteType {
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
export const onCreateGameType = /* GraphQL */ `
  subscription OnCreateGameType {
    onCreateGameType {
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
export const onUpdateGameType = /* GraphQL */ `
  subscription OnUpdateGameType {
    onUpdateGameType {
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
export const onDeleteGameType = /* GraphQL */ `
  subscription OnDeleteGameType {
    onDeleteGameType {
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
export const onCreateGameOrder = /* GraphQL */ `
  subscription OnCreateGameOrder($customer: String) {
    onCreateGameOrder(customer: $customer) {
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
export const onUpdateGameOrder = /* GraphQL */ `
  subscription OnUpdateGameOrder($customer: String) {
    onUpdateGameOrder(customer: $customer) {
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
export const onDeleteGameOrder = /* GraphQL */ `
  subscription OnDeleteGameOrder($customer: String) {
    onDeleteGameOrder(customer: $customer) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($user: String) {
    onCreateOrder(user: $user) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($user: String) {
    onUpdateOrder(user: $user) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($user: String) {
    onDeleteOrder(user: $user) {
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
