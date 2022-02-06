import Link from "next/link";

export const Logo = () => {
  return (
    <>
      <Link href="/">
        <div className="flex justify-center items-center">
          <span className="text-2xl text-zinc-50 tracking-tighter cursor-pointer">
            austin
          </span>
        </div>
      </Link>
    </>
  );
};
