import { rest } from "msw";

export default rest.get("http://localhost:4712/projects", (req, res, ctx) => {
  return res(ctx.status(500), ctx.json([]));
});
