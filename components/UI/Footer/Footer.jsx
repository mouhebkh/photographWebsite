import React from "react";

export default function Footer() {

  return (
    <>
      <div className=" pt-20 w-[90%] text-white px-10 sm:pb-20 pb-16">
        <div className="flex max-sm:flex max-sm:flex-col">
          <div className="sm:w-[70%]   sm:text-xl text-xs">
            <ul className="flex">
              <li className="mb-12 border-l-4 border-pink-800 px-2 cursor-pointer hover:scale-110 transform transition duration-500 ease-in-out hover:text-pink-800">
                About Us
              </li>
              <li className="mb-12 border-l-4 border-pink-800 px-2 hover:scale-110 transform transition duration-500 ease-in-out cursor-pointer hover:text-pink-800">
                Contact Us
              </li>
              <li className="mb-12 border-l-4 border-pink-800 px-2 hover:scale-110 transform transition duration-500 ease-in-out cursor-pointer hover:text-pink-800">
                Privacy
              </li>
            </ul>
          </div>

          <div className=" sm:text-xl text-xs font-bold max-sm:w-[60%]">
            <p>Be With Us</p>
            <div className="flex mt-4">
              <div className="flex sm:space-x-9 space-x-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="text-white hover:scale-110 transform transition duration-500 ease-in-out hover:text-pink-800 cursor-pointer  "
                >
                  <i className="fab fa-facebook sm:text-4xl text-2xl "></i>
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="text-white hover:scale-110 transform transition duration-500 ease-in-out hover:text-pink-800 cursor-pointer"
                >
                  <i className="fab fa-linkedin sm:text-4xl text-2xl"></i>
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  className="text-white hover:scale-110 transform transition duration-500 ease-in-out hover:text-pink-800 cursor-pointer"
                >
                  <i className="fab fa-twitter sm:text-4xl text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0  mt-10 max-sm:text-xs text-center bg-black w-[100%] text-white sm:py-4 py-1">
        &copy; 2024. All Rights Reserved
      </div>
    </>
  );
}
