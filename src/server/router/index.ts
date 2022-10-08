// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { userRouter } from "./user";
import { markerRouter } from "./marker";
import { imageRouter } from "./image";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("user.", userRouter)
  .merge("marker.", markerRouter)
  .merge("image.", imageRouter)

// export type definition of API
export type AppRouter = typeof appRouter;
