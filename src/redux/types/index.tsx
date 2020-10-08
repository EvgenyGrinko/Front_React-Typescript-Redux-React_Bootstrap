export type IPersonalData = {
  firstName: string;
  lastName: string;
  email: string;
};

export interface IAgreementData {
  agreement1: boolean;
}

export interface IPersonalAndAgreementData {
  firstName: string;
  lastName: string;
  email: string;
  agreement1: boolean;
}

export type State = {
  personalData: object;
  isAccountCreated: boolean;
  error: string;
};

export type Actions =
  | { type: string; payload: IPersonalData }
  | { type: string; payload: boolean }
  | { type: string; payload: string };

export type DispatchType = (args: Actions) => Actions;
