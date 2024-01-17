import type { Schema, Attribute } from '@strapi/strapi';

export interface ListBoardgameLibrary extends Schema.Component {
  collectionName: 'components_list_boardgame_libraries';
  info: {
    displayName: 'Boardgame Library';
    icon: 'puzzle';
    description: '';
  };
  attributes: {
    boardgame: Attribute.Relation<
      'list.boardgame-library',
      'oneToOne',
      'api::boardgame.boardgame'
    >;
    is_favorite: Attribute.Boolean & Attribute.DefaultTo<false>;
    date_purchased: Attribute.Date;
  };
}

export interface ListScorepoint extends Schema.Component {
  collectionName: 'components_list_scorepoints';
  info: {
    displayName: 'Scorepoint';
    icon: 'chartCircle';
    description: '';
  };
  attributes: {
    scorefield: Attribute.Relation<
      'list.scorepoint',
      'oneToOne',
      'api::scorefield.scorefield'
    >;
    point: Attribute.Float;
  };
}

export interface ListScoresheet extends Schema.Component {
  collectionName: 'components_list_scoresheets';
  info: {
    displayName: 'Scoresheet';
    icon: 'file';
    description: '';
  };
  attributes: {
    total_points: Attribute.Float;
    row: Attribute.Component<'list.scorepoint', true>;
    users_permissions_user: Attribute.Relation<
      'list.scoresheet',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'list.boardgame-library': ListBoardgameLibrary;
      'list.scorepoint': ListScorepoint;
      'list.scoresheet': ListScoresheet;
    }
  }
}
