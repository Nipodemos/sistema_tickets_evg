import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const api = axios.create({
  baseURL: "https://localhost:3333",
});
// This sets the mock adapter on the default instance
var mock = new MockAdapter(api, { delayResponse: 1000 });

export { mock, api };
