import Link from "next/link";

export const Logo = () => {
  return (
    <>
      <Link passHref={true} href="/">
        <div className="flex justify-center items-center">
          <span className="text-2xl text-zinc-50 transition duration-150 tracking-tighter cursor-pointer">
            austin w.
          </span>
        </div>
      </Link>
    </>
  );
};
