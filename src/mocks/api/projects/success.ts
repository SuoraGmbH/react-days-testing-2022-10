import { rest } from "msw";

export default rest.get("http://localhost:4712/projects", (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        id: "1",
        name: "iJS Conference mocked",
        description:
          "From Angular and React to WebAssembly; from Progressive Web Apps to JAMstack",
      },
      {
        id: "2",
        name: "Javascript Days",
        description:
          "Die großen Trainingsevents für JavaScript, Angular, React und HTML & CSS",
      },
      {
        id: "3",
        name: "JAX",
        description:
          "Die Konferenzen für Java, Architektur- und Software-Innovation",
      },
    ])
  );
});
