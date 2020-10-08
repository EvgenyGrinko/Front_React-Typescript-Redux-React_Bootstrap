import {
  ADD_PERSONAL_DATA_TO_ACCOUNT,
  AGREE_AND_CREATE_ACCOUNT,
  AGREE_AND_CREATE_ACCOUNT_SUCCESS, AGREE_AND_CREATE_ACCOUNT_ERROR
} from "../constants";
import axios from "axios";
import { IPersonalData, IPersonalAndAgreementData } from "../types/index";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import rootReducer from "../reducers/index";

interface IAddPersonDataAction {
  type: typeof ADD_PERSONAL_DATA_TO_ACCOUNT;
  payload: IPersonalData;
}

interface IAgreeAndCreateDataAction {
  type: typeof AGREE_AND_CREATE_ACCOUNT;
  payload: IPersonalAndAgreementData;
}
export function addPersonalData(data: IPersonalData): IAddPersonDataAction {
  return { type: ADD_PERSONAL_DATA_TO_ACCOUNT, payload: data };
}

export function agreeAndCreateAccount(
  personalData: IPersonalAndAgreementData
): ThunkAction<void, ReturnType<typeof rootReducer>, unknown, Action<string>> {
  return async (dispatch) => {
    try {
      const url = `https://5f7c019600bd74001690a208.mockapi.io/api/user`;
      const { data } = await axios.post(url, personalData);
      if (data) {
        dispatch({
          type: AGREE_AND_CREATE_ACCOUNT_SUCCESS,
          payload: true,
        });  
      }
    } catch (err) {
      dispatch({ type: AGREE_AND_CREATE_ACCOUNT_ERROR, payload: err.message });
    }
  };
}