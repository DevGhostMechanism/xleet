import Link from "next/link";
import React from "react";

const AlertNewUser = () => {
  return (
    <div className="bg-[#ff0000] border border-[#ff0000] text-[#ffffff] text-sm px-4 py-3 relative mt-2">
      <h2>ATTENTION!!!</h2>
      <p>
        Your account is currently inactive, please{" "}
        <a
          href="/add-balance"
          className="text-green-300 hover:text-green-200 underline"
        >
          top up
        </a>{" "}
        your account to explore all the features.
      </p>
    </div>
  );
};

export default AlertNewUser;
