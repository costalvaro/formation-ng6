import { Message } from 'src/app/shared/models/message.model';
import { ActionTypes } from 'src/app/store/actions/messages.actions';

export interface MessageState {
  all: Message[];
}

export const initState: MessageState = {
  all: null
};

export function messagesReducer(state: MessageState = initState, action) {
  switch (action.type) {
    case ActionTypes.GetAllMessagesSuccess:
      const all = action.messages;
      return {
        ...state,
        all
      };
    case ActionTypes.PostMessageSuccess:
      const messages = !state.all
        ? [action.message]
        : [...state.all, action.message];
      return {
        ...state,
        all: messages
      };
    default:
      return state;
  }
}
