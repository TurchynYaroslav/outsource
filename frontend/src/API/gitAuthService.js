import axios from "axios";
import Cookies from "js-cookie";
export default class GitAuthService {
  static async justRequest(url, params = {}) {
    try {
      const response = await axios({
        method: "get",
        url: url,
        params: params,
      });
      return response;
    } catch (error) {
      console.error("Error in justRequest:", error.message);
      throw error;
    }
  }
  // access_token
  static async setAccessToken(url, redirectUrl) {
    try {
      // get code
      const queryParams = new URLSearchParams(window.location.search);
      const code = queryParams.get("code");
      if (!code) {
        console.error("Parameter 'code' is missing in the URL.");
        return;
      }
      // send request
      let response = await this.justRequest(url, { code: code });
      // set access_token
      if (response.data) {
        Object.keys(response.data).forEach((key) => {
          Cookies.set(key, response.data[key][0], { expires: 7 });
        });
        return true;
      } else {
        console.error("Invalid response data.");
      }
    } catch (error) {
      console.error("Error in getParamCode:", error.message);
      throw error;
    }
  }
}
