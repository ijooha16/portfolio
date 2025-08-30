import Image from "next/image";

const Profile = () => {
  return (
    <>
      <div className="flex md:flex-col items-center md:items-start md:gap-6 justify-center">
        <div className="max-w-42 max-h-42 rounded-full  mr-8 overflow-hidden">
          <Image
            width={168}
            height={168}
            src={`/profile/profile.jpg`}
            alt="프로필 사진"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold">윤주하</div>
          <div className="flex gap-3">
            <div className="h-23 w-0.5 bg-gray-400" />
            <div className="text-sm">
              <div>Juha Yoon (Judy)</div>
              <div className="h-[1px] w-4 bg-gray-400 mb-2 mt-6" />
              <div>Tel. 010-4997-8256</div>
              <div>E-mail. ijooha16@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
