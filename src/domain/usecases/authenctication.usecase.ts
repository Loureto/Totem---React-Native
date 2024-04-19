export interface Authentication {
  login: (params: Authentication.Params) => Promise<any>;
}

export namespace Authentication {
  export type Params = {
    cpf: string;
  };
}
