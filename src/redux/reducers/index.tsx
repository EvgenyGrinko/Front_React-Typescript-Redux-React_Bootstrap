import {
  ADD_PERSONAL_DATA_TO_ACCOUNT,
  AGREE_AND_CREATE_ACCOUNT_SUCCESS,
  AGREE_AND_CREATE_ACCOUNT_ERROR,
  AGREE_AND_CREATE_ACCOUNT,
  RESET_STATE,
} from "../constants/index";

const INIT_STATE = {
  personalData: {},
  isAccountCreated: false,
  error: "",
  loading: false,
};

interface IAction {
  type: string;
  payload: object;
}

function rootReducer(state = INIT_STATE, { type, payload }: IAction) {
  switch (type) {
    case ADD_PERSONAL_DATA_TO_ACCOUNT:
      return {
        ...state,
        personalData: { ...state.personalData, ...payload },
        isAccountCreated: false,
        error: "",
      };
    case AGREE_AND_CREATE_ACCOUNT:
      return {
        ...state,
        loading: true,
      };
    case AGREE_AND_CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        isAccountCreated: payload,
        loading: false,
      };
    case AGREE_AND_CREATE_ACCOUNT_ERROR:
      return {
        ...state,
        isAccountCreated: false,
        loading: false,
        error: payload,
      };
    case RESET_STATE:
      return INIT_STATE;
    default:
      return { ...state };
  }
}
export default rootReducer;
