import { createRouter } from "./context";
import { z } from "zod";

export const userRouter = createRouter()
  .mutation("register", {
    input: z.object({
      email: z.string().email(),
      password: z.string().min(8),
      passwordConfirm: z.string().min(8),
    }),
    resolve: async ({ ctx, input }) => {
      await ctx.client.users.create({
        email: input.email,
        password: input.password,
        passwordConfirm: input.passwordConfirm,
      });

      await ctx.client.users.authViaEmail(input.email, input.password);

      ctx.res.setHeader("set-cookie", ctx.client.authStore.exportToCookie());

      return {
        token: ctx.client.authStore.exportToCookie(),
      };
    },
  })
  .mutation("signIn", {
    input: z.object({
      email: z.string().email(),
      password: z.string().min(8),
    }),
    resolve: async ({ ctx, input }) => {
      await ctx.client.users.authViaEmail(input.email, input.password);

      ctx.res.setHeader("set-cookie", ctx.client.authStore.exportToCookie());

      return {
        token: ctx.client.authStore.exportToCookie(),
      };
    },
  })
  .query("getAuthMethods", {
    resolve: async ({ ctx }) => {
      const authMethods = await ctx.client.users.listAuthMethods();

      return authMethods;
    },
  })
  .query("getSession", {
    resolve: async ({ ctx }) => {
      try {
        ctx.client.authStore.loadFromCookie(ctx.req.headers.cookie as string);

        const user = await ctx.client.users.getOne(
          ctx.client.authStore.model?.id as string
        );

        const filteredUser = {
          id: user.id,
          avatarUrl: user.profile?.avatarUrl as string,
          name: user.profile?.name as string,
          email: user.email
        };

        return filteredUser;
      } catch (e) {
        return null;
      }
    },
  })
  .mutation("removeToken", {
    resolve: async ({ ctx }) => {
      ctx.res.setHeader(
        "set-cookie",
        "pb_auth=; path=/;"
      );
    },
  })
  .query("getOneById", {
    input: z.object({
      id: z.string()
    }),
    resolve: async ({ ctx, input }) => {

      await ctx.client.admins.authViaEmail("vasik1234541@gmail.com", "Kokotbananekmuj.OO")

      const user = await ctx.client.users.getOne(input.id);

      const filteredUser = {
        id: user.id,
        avatarUrl: user.profile?.avatarUrl as string,
        name: user.profile?.name as string,
        email: user.email
      };

      return filteredUser;

    },
  })
