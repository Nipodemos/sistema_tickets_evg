import { mock } from "./index";

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/tickets").reply(200, {
  users: [{ id: 1, name: "John Smith" }],
});
