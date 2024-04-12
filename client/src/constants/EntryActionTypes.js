const PREFIX = '@entry';

export default {
  PREFIX,

  /* Socket */

  SOCKET_DISCONNECT_HANDLE: `${PREFIX}/SOCKET_DISCONNECT_HANDLE`,
  SOCKET_RECONNECT_HANDLE: `${PREFIX}/SOCKET_RECONNECT_HANDLE`,

  /* Login */

  AUTHENTICATE: `${PREFIX}/AUTHENTICATE`,
  USING_OIDC_AUTHENTICATE: `${PREFIX}/USING_OIDC_AUTHENTICATE`,
  AUTHENTICATE_ERROR_CLEAR: `${PREFIX}/AUTHENTICATE_ERROR_CLEAR`,

  /* Core */

  LOGOUT: `${PREFIX}/LOGOUT`,

  /* Modals */

  MODAL_OPEN: `${PREFIX}/MODAL_OPEN`,
  MODAL_CLOSE: `${PREFIX}/MODAL_CLOSE`,

  /* Users */

  USER_CREATE: `${PREFIX}/USER_CREATE`,
  USER_CREATE_HANDLE: `${PREFIX}/USER_CREATE_HANDLE`,
  USER_CREATE_ERROR_CLEAR: `${PREFIX}/USER_CREATE_ERROR_CLEAR`,
  USER_UPDATE: `${PREFIX}/USER_UPDATE`,
  CURRENT_USER_UPDATE: `${PREFIX}/CURRENT_USER_UPDATE`,
  USER_UPDATE_HANDLE: `${PREFIX}/USER_UPDATE_HANDLE`,
  CURRENT_USER_LANGUAGE_UPDATE: `${PREFIX}/CURRENT_USER_LANGUAGE_UPDATE`,
  USER_EMAIL_UPDATE: `${PREFIX}/USER_EMAIL_UPDATE`,
  CURRENT_USER_EMAIL_UPDATE: `${PREFIX}/CURRENT_USER_EMAIL_UPDATE`,
  USER_EMAIL_UPDATE_ERROR_CLEAR: `${PREFIX}/USER_EMAIL_UPDATE_ERROR_CLEAR`,
  CURRENT_USER_EMAIL_UPDATE_ERROR_CLEAR: `${PREFIX}/CURRENT_USER_EMAIL_UPDATE_ERROR_CLEAR`,
  USER_PASSWORD_UPDATE: `${PREFIX}/USER_PASSWORD_UPDATE`,
  CURRENT_USER_PASSWORD_UPDATE: `${PREFIX}/CURRENT_USER_PASSWORD_UPDATE`,
  USER_PASSWORD_UPDATE_ERROR_CLEAR: `${PREFIX}/USER_PASSWORD_UPDATE_ERROR_CLEAR`,
  CURRENT_USER_PASSWORD_UPDATE_ERROR_CLEAR: `${PREFIX}/CURRENT_USER_PASSWORD_UPDATE_ERROR_CLEAR`,
  USER_USERNAME_UPDATE: `${PREFIX}/USER_USERNAME_UPDATE`,
  CURRENT_USER_USERNAME_UPDATE: `${PREFIX}/CURRENT_USER_USERNAME_UPDATE`,
  USER_USERNAME_UPDATE_ERROR_CLEAR: `${PREFIX}/USER_USERNAME_UPDATE_ERROR_CLEAR`,
  CURRENT_USER_USERNAME_UPDATE_ERROR_CLEAR: `${PREFIX}/CURRENT_USER_USERNAME_UPDATE_ERROR_CLEAR`,
  CURRENT_USER_AVATAR_UPDATE: `${PREFIX}/CURRENT_USER_AVATAR_UPDATE`,
  USER_DELETE: `${PREFIX}/USER_DELETE`,
  USER_DELETE_HANDLE: `${PREFIX}/USER_DELETE_HANDLE`,
  USER_TO_CARD_ADD: `${PREFIX}/USER_TO_CARD_ADD`,
  USER_TO_CURRENT_CARD_ADD: `${PREFIX}/USER_TO_CURRENT_CARD_ADD`,
  USER_TO_CARD_ADD_HANDLE: `${PREFIX}/USER_TO_CARD_ADD_HANDLE`,
  USER_FROM_CARD_REMOVE: `${PREFIX}/USER_FROM_CARD_REMOVE`,
  USER_FROM_CURRENT_CARD_REMOVE: `${PREFIX}/USER_FROM_CURRENT_CARD_REMOVE`,
  USER_FROM_CARD_REMOVE_HANDLE: `${PREFIX}/USER_FROM_CARD_REMOVE_HANDLE`,
  USER_TO_FILTER_IN_CURRENT_BOARD_ADD: `${PREFIX}/USER_TO_FILTER_IN_CURRENT_BOARD_ADD`,
  USER_FROM_FILTER_IN_CURRENT_BOARD_REMOVE: `${PREFIX}/USER_FROM_FILTER_IN_CURRENT_BOARD_REMOVE`,

  /* Projects */

  PROJECT_CREATE: `${PREFIX}/PROJECT_CREATE`,
  PROJECT_CREATE_HANDLE: `${PREFIX}/PROJECT_CREATE_HANDLE`,
  CURRENT_PROJECT_UPDATE: `${PREFIX}/CURRENT_PROJECT_UPDATE`,
  PROJECT_UPDATE_HANDLE: `${PREFIX}/PROJECT_UPDATE_HANDLE`,
  CURRENT_PROJECT_BACKGROUND_IMAGE_UPDATE: `${PREFIX}/CURRENT_PROJECT_BACKGROUND_IMAGE_UPDATE`,
  CURRENT_PROJECT_DELETE: `${PREFIX}/CURRENT_PROJECT_DELETE`,
  PROJECT_DELETE_HANDLE: `${PREFIX}/PROJECT_DELETE_HANDLE`,

  /* Project managers */

  MANAGER_IN_CURRENT_PROJECT_CREATE: `${PREFIX}/MANAGER_IN_CURRENT_PROJECT_CREATE`,
  PROJECT_MANAGER_CREATE_HANDLE: `${PREFIX}/PROJECT_MANAGER_CREATE_HANDLE`,
  PROJECT_MANAGER_DELETE: `${PREFIX}/PROJECT_MANAGER_DELETE`,
  PROJECT_MANAGER_DELETE_HANDLE: `${PREFIX}/PROJECT_MANAGER_DELETE_HANDLE`,

  /* Boards */

  BOARD_IN_CURRENT_PROJECT_CREATE: `${PREFIX}/BOARD_IN_CURRENT_PROJECT_CREATE`,
  BOARD_CREATE_HANDLE: `${PREFIX}/BOARD_CREATE_HANDLE`,
  BOARD_FETCH: `${PREFIX}/BOARD_FETCH`,
  BOARD_UPDATE: `${PREFIX}/BOARD_UPDATE`,
  BOARD_UPDATE_HANDLE: `${PREFIX}/BOARD_UPDATE_HANDLE`,
  BOARD_MOVE: `${PREFIX}/BOARD_MOVE`,
  BOARD_DELETE: `${PREFIX}/BOARD_DELETE`,
  BOARD_DELETE_HANDLE: `${PREFIX}/BOARD_DELETE_HANDLE`,
  KEYWORD_TO_FILTER_IN_CURRENT_BOARD_UPDATE: `${PREFIX}/KEYWORD_TO_FILTER_IN_CURRENT_BOARD_UPDATE`,

  /* Board memberships */

  MEMBERSHIP_IN_CURRENT_BOARD_CREATE: `${PREFIX}/MEMBERSHIP_IN_CURRENT_BOARD_CREATE`,
  BOARD_MEMBERSHIP_CREATE_HANDLE: `${PREFIX}/BOARD_MEMBERSHIP_CREATE_HANDLE`,
  BOARD_MEMBERSHIP_UPDATE: `${PREFIX}/BOARD_MEMBERSHIP_UPDATE`,
  BOARD_MEMBERSHIP_UPDATE_HANDLE: `${PREFIX}/BOARD_MEMBERSHIP_UPDATE_HANDLE`,
  BOARD_MEMBERSHIP_DELETE: `${PREFIX}/BOARD_MEMBERSHIP_DELETE`,
  BOARD_MEMBERSHIP_DELETE_HANDLE: `${PREFIX}/BOARD_MEMBERSHIP_DELETE_HANDLE`,

  /* Labels */

  LABEL_IN_CURRENT_BOARD_CREATE: `${PREFIX}/LABEL_IN_CURRENT_BOARD_CREATE`,
  LABEL_CREATE_HANDLE: `${PREFIX}/LABEL_CREATE_HANDLE`,
  LABEL_UPDATE: `${PREFIX}/LABEL_UPDATE`,
  LABEL_UPDATE_HANDLE: `${PREFIX}/LABEL_UPDATE_HANDLE`,
  LABEL_MOVE: `${PREFIX}/LABEL_MOVE`,
  LABEL_DELETE: `${PREFIX}/LABEL_DELETE`,
  LABEL_DELETE_HANDLE: `${PREFIX}/LABEL_DELETE_HANDLE`,
  LABEL_TO_CARD_ADD: `${PREFIX}/LABEL_TO_CARD_ADD`,
  LABEL_TO_CURRENT_CARD_ADD: `${PREFIX}/LABEL_TO_CURRENT_CARD_ADD`,
  LABEL_TO_CARD_ADD_HANDLE: `${PREFIX}/LABEL_TO_CARD_ADD_HANDLE`,
  LABEL_FROM_CARD_REMOVE: `${PREFIX}/LABEL_FROM_CARD_REMOVE`,
  LABEL_FROM_CURRENT_CARD_REMOVE: `${PREFIX}/LABEL_FROM_CURRENT_CARD_REMOVE`,
  LABEL_FROM_CARD_REMOVE_HANDLE: `${PREFIX}/LABEL_FROM_CARD_REMOVE_HANDLE`,
  LABEL_TO_FILTER_IN_CURRENT_BOARD_ADD: `${PREFIX}/LABEL_TO_FILTER_IN_CURRENT_BOARD_ADD`,
  LABEL_FROM_FILTER_IN_CURRENT_BOARD_REMOVE: `${PREFIX}/LABEL_FROM_FILTER_IN_CURRENT_BOARD_REMOVE`,

  /* Lists */

  LIST_IN_CURRENT_BOARD_CREATE: `${PREFIX}/LIST_IN_CURRENT_BOARD_CREATE`,
  LIST_CREATE_HANDLE: `${PREFIX}/LIST_CREATE_HANDLE`,
  LIST_UPDATE: `${PREFIX}/LIST_UPDATE`,
  LIST_UPDATE_HANDLE: `${PREFIX}/LIST_UPDATE_HANDLE`,
  LIST_MOVE: `${PREFIX}/LIST_MOVE`,
  LIST_DELETE: `${PREFIX}/LIST_DELETE`,
  LIST_DELETE_HANDLE: `${PREFIX}/LIST_DELETE_HANDLE`,

  /* Cards */

  CARD_CREATE: `${PREFIX}/CARD_CREATE`,
  CARD_CREATE_HANDLE: `${PREFIX}/CARD_CREATE_HANDLE`,
  CARD_UPDATE: `${PREFIX}/CARD_UPDATE`,
  CURRENT_CARD_UPDATE: `${PREFIX}/CURRENT_CARD_UPDATE`,
  CARD_UPDATE_HANDLE: `${PREFIX}/CARD_UPDATE_HANDLE`,
  CARD_MOVE: `${PREFIX}/CARD_MOVE`,
  CURRENT_CARD_MOVE: `${PREFIX}/CURRENT_CARD_MOVE`,
  CARD_TRANSFER: `${PREFIX}/CARD_TRANSFER`,
  CURRENT_CARD_TRANSFER: `${PREFIX}/CURRENT_CARD_TRANSFER`,
  CARD_DUPLICATE: `${PREFIX}/CARD_DUPLICATE`,
  CURRENT_CARD_DUPLICATE: `${PREFIX}/CURRENT_CARD_DUPLICATE`,
  CARD_DELETE: `${PREFIX}/CARD_DELETE`,
  CURRENT_CARD_DELETE: `${PREFIX}/CURRENT_CARD_DELETE`,
  CARD_DELETE_HANDLE: `${PREFIX}/CARD_DELETE_HANDLE`,

  /* Tasks */

  TASK_IN_CURRENT_CARD_CREATE: `${PREFIX}/TASK_IN_CURRENT_CARD_CREATE`,
  TASK_CREATE_HANDLE: `${PREFIX}/TASK_CREATE_HANDLE`,
  TASK_UPDATE: `${PREFIX}/TASK_UPDATE`,
  TASK_UPDATE_HANDLE: `${PREFIX}/TASK_UPDATE_HANDLE`,
  TASK_MOVE: `${PREFIX}/TASK_MOVE`,
  TASK_DELETE: `${PREFIX}/TASK_DELETE`,
  TASK_DELETE_HANDLE: `${PREFIX}/TASK_DELETE_HANDLE`,

  /* Attachments */

  ATTACHMENT_IN_CURRENT_CARD_CREATE: `${PREFIX}/ATTACHMENT_IN_CURRENT_CARD_CREATE`,
  ATTACHMENT_CREATE_HANDLE: `${PREFIX}/ATTACHMENT_CREATE_HANDLE`,
  ATTACHMENT_UPDATE: `${PREFIX}/ATTACHMENT_UPDATE`,
  ATTACHMENT_UPDATE_HANDLE: `${PREFIX}/ATTACHMENT_UPDATE_HANDLE`,
  ATTACHMENT_DELETE: `${PREFIX}/ATTACHMENT_DELETE`,
  ATTACHMENT_DELETE_HANDLE: `${PREFIX}/ATTACHMENT_DELETE_HANDLE`,

  /* Activities */

  ACTIVITIES_IN_CURRENT_CARD_FETCH: `${PREFIX}/ACTIVITIES_IN_CURRENT_CARD_FETCH`,
  ACTIVITIES_DETAILS_IN_CURRENT_CARD_TOGGLE: `${PREFIX}/ACTIVITIES_DETAILS_IN_CURRENT_CARD_TOGGLE`,
  ACTIVITY_CREATE_HANDLE: `${PREFIX}/ACTIVITY_CREATE_HANDLE`,
  ACTIVITY_UPDATE_HANDLE: `${PREFIX}/ACTIVITY_UPDATE_HANDLE`,
  ACTIVITY_DELETE_HANDLE: `${PREFIX}/ACTIVITY_DELETE_HANDLE`,

  /* Comment activities */

  COMMENT_ACTIVITY_IN_CURRENT_CARD_CREATE: `${PREFIX}/COMMENT_ACTIVITY_IN_CURRENT_CARD_CREATE`,
  COMMENT_ACTIVITY_UPDATE: `${PREFIX}/COMMENT_ACTIVITY_UPDATE`,
  COMMENT_ACTIVITY_DELETE: `${PREFIX}/COMMENT_ACTIVITY_DELETE`,

  /* Notifications */

  NOTIFICATION_CREATE_HANDLE: `${PREFIX}/NOTIFICATION_CREATE_HANDLE`,
  NOTIFICATION_DELETE: `${PREFIX}/NOTIFICATION_DELETE`,
  NOTIFICATION_DELETE_HANDLE: `${PREFIX}/NOTIFICATION_DELETE_HANDLE`,
};
