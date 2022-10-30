import { NextPage } from "next";
import React from "react";
import { MainContainer } from "../../components/MainContainer";
import { useSession } from "../../hooks/useSession";
import { BiArrowToLeft } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { trpc } from "../../utils/trpc";
import { useRouter } from "next/router";
import Link from "next/link";
import { BackToMapButton } from "../../components/UserPage/BackToMapButton";
import Head from "next/head";
import { HiOutlinePencil } from "react-icons/hi";

const UserPage: NextPage = () => {
  const session = useSession();
  const router = useRouter();
  const user = trpc.useQuery([
    "user.getOneById",
    {
      id: router.query.id as string,
    },
  ]);

  if (user.isLoading) return null;

  return (
    <>
      <Head>
        <title>
          Spotty |{" "}
          {user.data?.name === ""
            ? user.data?.email.split("@")[0]
            : user.data?.name}
        </title>
      </Head>
      <MainContainer>
        <div className="w-full h-full flex p-4 bg-zinc-50 px-10 pt-7">
          <div className="w-full h-full flex flex-col">
            <BackToMapButton />
            <div className="flex justify-start flex-col gap-3 pt-6">
              <img
                src={
                  user.data?.avatarUrl === ""
                    ? "/images/undraw_pic_profile.svg"
                    : user.data?.avatarUrl
                }
                className="rounded-2xl border-2 border-zinc-200 w-full h-full"
                style={{
                  maxWidth: "150px",
                  maxHeight: "150px",
                }}
                alt="profile picture"
                draggable={false}
              />
              <h2 className="text-3xl font-bold">
                {user.data?.name === ""
                  ? user.data?.email.split("@")[0]
                  : user.data?.name}
              </h2>
            </div>
            <div className="flex pt-5 items-center gap-3">
              <h2 className="font-bold text-xl">User details</h2>
              <button className="w-10 h-10 p-2 hover:bg-zinc-100 active:bg-zinc-200 transition-all rounded-full flex items-center justify-center">
                <HiOutlinePencil className="w-5 h-5 text-blue-600" />
              </button>
            </div>
            <div className="flex text-zinc-600 max-w-sm">
              <div className="flex w-full flex-col gap-3">
                <h2>Email</h2>
                <h2>Total places</h2>
                <h2>Member since</h2>
              </div>
              <div className="flex w-full flex-col gap-3">
                <a
                  href={`mailto:${user.data?.email}`}
                  className="text-blue-600"
                >
                  {user.data?.email}
                </a>
                <h2>Total places</h2>
                <h2>Member since</h2>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex"></div>
        </div>
      </MainContainer>
    </>
  );
};

export default UserPage;
