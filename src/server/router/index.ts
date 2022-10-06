// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { userRouter } from "./user";
import { markerRouter } from "./marker";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("user.", userRouter)
  .merge("marker.", markerRouter)

// export type definition of API
export type AppRouter = typeof appRouter;
