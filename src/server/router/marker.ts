import { z } from "zod";
import { MarkerRecordType } from "../../types/MarkerRecordType";
import { createRouter } from "./context";

export const markerRouter = createRouter()
  .query("getAll", {
    resolve: async ({ ctx }) => {
      const markers = await ctx.client.records.getFullList("markers");

      return markers as never as MarkerRecordType[];
    },
  })
  .mutation("create", {
    input: z.object({
      lat: z.number().min(-90).max(90),
      lng: z.number().min(-180).max(180),
      hashtags: z.array(z.string().min(3).max(20)).max(12).min(1),
      title: z.string().min(3)
    }),
    resolve: async ({ ctx, input }) => {
      console.log(input);

      ctx.client.authStore.loadFromCookie(ctx.req.headers.cookie as string);

      const marker = await ctx.client.records.create("markers", { ...input, creator: ctx.client.authStore.model?.id });

      console.log(marker);

      return marker;
    },
  });
