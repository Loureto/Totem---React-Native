import { Authentication } from "@/domain";
import { HttpClient, HttpStatusCode } from "../protocols";

export class RemoteLoginIndividualRepository implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<any>
  ) {}

  async login(params: Authentication.Params): Promise<any> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "post",
      body: params,
    });

    console.log(httpResponse);

    console.log(httpResponse);
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.unauthorized:
        throw new Error();
      default:
        throw new Error();
    }
  }
}
