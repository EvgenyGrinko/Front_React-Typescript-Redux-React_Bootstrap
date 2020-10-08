import {
  ADD_PERSONAL_DATA_TO_ACCOUNT,
  AGREE_AND_CREATE_ACCOUNT_SUCCESS,
  AGREE_AND_CREATE_ACCOUNT_ERROR,
} from "../constants/index";

const initialState = {
  personalData: {},
  isAccountCreated: false,
  error: "",
};

interface IAction {
  type: string;
  payload: object;
}

function rootReducer(state = initialState, { type, payload }: IAction) {
  switch (type) {
    case ADD_PERSONAL_DATA_TO_ACCOUNT:
      return {
        ...state,
        personalData: { ...state.personalData, ...payload },
        isAccountCreated: false,
        error: ''
      };
    case AGREE_AND_CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        isAccountCreated: payload,
      };
    case AGREE_AND_CREATE_ACCOUNT_ERROR:
      return {
        ...state,
        isAccountCreated: false,
        error: payload 
      };
    default:
      return state;
  }
}
// export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
