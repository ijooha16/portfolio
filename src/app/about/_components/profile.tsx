const Profile = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-6 justify-center">
        <div className="w-42 h-42 rounded-full bg-gray-200 mr-8"></div>
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
    </>
  );
};

export default Profile;
