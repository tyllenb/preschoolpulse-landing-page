/* eslint-disable @next/next/no-html-link-for-pages */
import logo from '../public/images/ppLogo.png'
import Image from 'next/image'

export default function Header() {
  return (
    <>
      <div
        className="
        bg-orange-400
        grotesk
        absolute
        top-0
        h-7
        w-full 
        text-center
        md:text-sm
        leading-6
        text-white
        text-xs
        pt-[3px]
      "
      >
        Learn more about Preschool Pulse.
        <a href="/" className="pl-3 underline">
          Check out our blog post.
        </a>
      </div>
      <div className="grotesk mt-6 mb-16 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-6">
        <div className="mt-4 inline-block pb-4 md:pl-8">
          <a href="/" className="align-middle text-3xl font-bold text-black">
            <Image src={logo} width="300px" height="80px"/>
          </a>
          <div className="hidden pl-14 align-middle xl:inline-block">
            <a href="#features" className="pr-12 text-xl text-black">
              Features
            </a>
            <a href="/" className="pr-12 text-xl text-black">
              Blog
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden py-1 text-right xl:inline-block">
            <a
              className="mt-2 inline-flex items-center px-12 py-3 text-lg font-semibold tracking-tighter text-black"
              href="https://app.preschoolpulse.com/"
            >
              Log in
            </a>
            <a
              className="bg-blue mt-2 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white"
              href="/"
            >
              Request a demo
            </a>
          </div>
          <button className="pr-12 pl-4">
            <svg
              className="mr-auto inline-block text-black xl:hidden"
              width="33"
              height="50"
              viewBox="0 0 23 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.892578 10.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M0.892578 18.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M22.1066 14.8688H0.893399"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
