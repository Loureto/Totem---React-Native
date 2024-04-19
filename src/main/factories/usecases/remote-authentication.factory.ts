import { makeApiUrl } from "../http/api-url-factory";
import { makeAxiosHttpClient } from "../http";

import { RemoteLoginIndividualRepository } from "@/data";
import { Authentication } from "@/domain";

export const makeLogin = (): Authentication =>
  new RemoteLoginIndividualRepository(
    makeApiUrl("/authentication"),
    makeAxiosHttpClient()
  );
