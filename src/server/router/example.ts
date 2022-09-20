import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter().query("hello", {
  input: z
    .object({
      text: z.string().nullish(),
    })
    .nullish(),
  async resolve({ ctx }) {
    const admin = await ctx.client.admins.authViaEmail("vasek.pirou@gmail.com", "Kokotbananekmuj.OO")

    return {
      greeting: admin,
    };
  },
});
