import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

interface IApiInstance {
  baseURL: string;
}

abstract class API {
  public instance: AxiosInstance;

  constructor(config: IApiInstance) {
    this.instance = axios.create({
      ...config,
      withCredentials: false
    });
  }

  protected async request(config: AxiosRequestConfig): Promise<any> {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const response = await this.instance.request({
            ...config
          });
          resolve(response);
        } catch (e) {
          reject(e);
        }
      })();
    })
  }
}

export default API;
