import { HttpClient, HttpRequest, HttpResponse } from "@/data";
import axios, { AxiosError, AxiosResponse } from "axios";

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error) {
      const _error = error as AxiosError;
      axiosResponse = _error.response as AxiosResponse;
    }

    return {
      body: axiosResponse.data,
      statusCode: axiosResponse.status,
    };
  }
}
