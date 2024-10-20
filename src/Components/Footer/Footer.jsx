import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-10">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="self-center text-3xl font-bold text-gray-800 transition duration-300 hover:text-orange-600">
                Sumit Thakur
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase tracking-wide">
                Resources
              </h2>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <Link
                    to="/"
                    className="hover:underline hover:text-orange-600 transition duration-300 transform hover:-translate-y-1"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:underline hover:text-orange-600 transition duration-300 transform hover:-translate-y-1"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase tracking-wide">
                Follow me
              </h2>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <a
                    href="https://github.com/sumitThakur1600"
                    className="hover:underline hover:text-orange-600 transition duration-300 transform hover:-translate-y-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com"
                    className="hover:underline hover:text-orange-600 transition duration-300 transform hover:-translate-y-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase tracking-wide">
                Legal
              </h2>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:underline hover:text-orange-600 transition duration-300 transform hover:-translate-y-1"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:underline hover:text-orange-600 transition duration-300 transform hover:-translate-y-1"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <a href="" className="hover:underline">
              Sumit Thakur
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link
              to="#"
              className="text-gray-500 hover:text-orange-600 transition duration-300 transform hover:-translate-y-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-2v10h-4V12h-2V9h2V7c0-2.21 1.79-4 4-4h2v3h-2c-.55 0-1 .45-1 1v2h3l-1 3z" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-orange-600 transition duration-300 transform hover:-translate-y-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .3C5.5.3.3 5.6.3 12c0 6.5 5.2 11.7 11.7 11.7 6.5 0 11.7-5.2 11.7-11.7 0-6.5-5.2-11.7-11.7-11.7zm-.2 20c-1.7 0-3.3-.4-4.8-1.2 2-1.2 3.7-2.8 5.4-4.5.6-.6 1.1-1.3 1.6-2-.6-.5-1.2-1-1.8-1.5-.6-.5-1.2-1.1-1.8-1.7-.3.2-.7.5-1 .6-.3.2-.6.5-.9.7-1.2.7-2.6 1-3.9 1.2.1.6.2 1.3.3 1.9.6-.3 1.2-.5 1.8-.6.6 0 1.3.2 1.9.4-1.3.9-3.1 1.5-5 1.6-.3 0-.6-.1-.9-.1 1.2.9 2.7 1.4 4.3 1.5 1.3.1 2.5.2 3.8-.1.2-.1.4-.2.6-.3.2-.2.3-.5.3-.8z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-orange-600 transition duration-300 transform hover:-translate-y-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.3 4.1c-.8.4-1.6.7-2.5.8.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-.8-.8-1.9-1.3-3.1-1.3-2.4 0-4.3 1.9-4.3 4.3 0 .3 0 .5.1.7-3.6-.2-6.8-1.9-9-4.5-.4.7-.6 1.5-.6 2.3 0 1.6.8 3 2 3.9-.7 0-1.4-.2-2.1-.5 0 0 0 0 0 .1 0 2.3 1.6 4.3 3.8 4.8-.4.1-.8.2-1.3.2-.3 0-.7 0-1 0 .7 2.1 2.8 3.7 5.3 3.7-1.9 1.5-4.3 2.5-6.9 2.5-.4 0-.7 0-1.1-.1 2.5 1.6 5.4 2.6 8.5 2.6 10.2 0 15.8-8.5 15.8-15.8 0-.2 0-.5 0-.7 1.1-.8 2.1-1.8 2.9-2.9-.9.4-1.8.7-2.8.9z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
