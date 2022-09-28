import { NextApiRequest, NextApiResponse } from "next"
import { client } from "../../../utils/pocketbase"

const RedirectHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const provider = JSON.parse(req.cookies.provider as string)

  const user = await client.users.authViaOAuth2(
    provider.name,
    req.query.code as string,
    provider.codeVerifier,
    "http://localhost:3000/api/auth/redirect",
  )

  console.log(user)

  await client.records.update("profiles", user.user.profile?.id as string, {
    avatarUrl: user.meta.avatarUrl,
    name: user.meta.name
  })

  res.setHeader("set-cookie", client.authStore.exportToCookie());

  res.redirect("/");
};


export default RedirectHandler