import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Link href="https://github.com/ijooha16" target="_blank" rel="noreferrer">
      <div className="flex-col gap-4 py-24 font-bold border-t-[1px] border-gray-200 flex justify-center items-center h-32">
        {`Judy's github`}
        <Image
          width={42}
          height={42}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          alt="github"
        />
      </div>
    </Link>
  );
};

export default Footer;
