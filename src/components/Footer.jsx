import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-4 border-gray-300  py-12 px-12 border-t">
      <p className="text-xl font-bold text-violet-700 flex justify-center">
        <Image width={60} height={60} alt="" src="/ahead-logo.png" />
      </p>
      <p className="text-xl font-bold text-violet-700 text-center">greensite</p>
      <div className="flex gap-8 items-center justify-center mt-5 font-semibold">
        <div className="">India 20, 10001 Delhi</div>
        <div className="">hi@greensite-app.com</div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/appleStoreIcon.svg"
          alt="download applestore"
          width={150}
          height={150}
        />
      </div>
      <div className="text-center text-sm text-gray-500">
        &copy; Green App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
