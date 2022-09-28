import { useEffect } from "react";
import { trpc } from "../utils/trpc";

export const useSession = () => {
  const getUser = trpc.useQuery(["user.auth"]);

  useEffect(() => {
    console.log(getUser.data);
  }, [getUser]);

  return null;
};
