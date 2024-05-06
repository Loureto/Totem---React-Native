import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { api } from "./axios-config";

export async function fetchApi<T>(
  url = "",
  configAxios?: AxiosRequestConfig<any>
): Promise<{ data: T; status: number }> {
  let axiosResponse: AxiosResponse;

  try {
    axiosResponse = await api.get<T>(url, configAxios);
  } catch (error) {
    const _error = error as AxiosError;
    axiosResponse = _error.response as AxiosResponse;
  }

  return {
    data: axiosResponse.data,
    status: axiosResponse.status,
  };
}
