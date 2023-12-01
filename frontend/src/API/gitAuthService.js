import axios from "axios";
import Cookies from "js-cookie";
export default class GitAuthService {
  static async justRequest(get_url, get_params) {
    const response = await axios({
      method: "get",
      //   "http://127.0.0.1:8000/gitauth/"
      url: get_url,
      params: get_params,
    });
    return response;
  }
  static async getParamCode(get_url) {
    const url = new URLSearchParams(window.location.search);
    const params = url.get("code");
    let response = await this.justRequest(get_url, { code: params });
    Object.keys(response.data).forEach((key) => {
      Cookies.set(key, response.data[key][0], { expires: 7 });
    });
    // Cookies.set("user", "John Doe", { expires: 7 });
    window.close();
  }
}
