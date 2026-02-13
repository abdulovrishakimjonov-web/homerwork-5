"use client";
import { useSession } from "next-auth/react";

const HomeComponent = () => {
  const { data, status } = useSession();

  if (status === "loading") return <div>Yuklanmoqda...</div>;
  if (!data) return <div>Tizimga kirmagansiz</div>;

  return (
    <div>
      {data?.user?.image && (
        <img
          src={data.user.image}
          alt="User avatar"
          width={100}
          height={100}
          className="rounded-full"
        />
      )}
      <p>{data?.user?.name}</p>
      <p>{data?.user?.email}</p>
    </div>
  );
};

export default HomeComponent;
