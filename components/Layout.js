/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

export default function Main() {
  return (
    <div className="grotesk max-w-8xl mx-auto">
      <section className="w-full text-black">

        {/* Hero Section */}
        <div className="max-w-8xl mx-auto md:flex items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-1">
          <div className="md:w-7/12 p-1">
            <h2 className="md:max-w-4xl lg:text-[3.9em] text-2xl font-bold leading-none text-black">
              Is Your Preschool Thriving or Just Surviving?
            </h2>
            <p className="mt-6 md:max-w-7xl md:max-w-3xl text:sm lg:text-xl font-medium text-[#404040]">
              Discover the health of your institution with tailored metrics and diagnostic checks. Preschool Pulse keeps your staff engaged and parents happy, powering a vibrant learning environment.
            </p>
            <a
                className="bg-blue mt-6 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white"
                href="/"
              >
                Request a demo
            </a>
          </div>
          <div className="md:w-5/12 p-3">
            <img className="w-full md:inline hidden" src="/images/header.png"  alt="Hero" />
          </div>
        </div>

        {/* Testimonials */}
        {/* <div className="mt-0 bg-white lg:mt-40">
          <div className="mx-auto">
            <div className="mx-auto px-5 py-24 lg:px-24">
              <div className="my-10 flex w-full flex-col text-center">
                <h2 className="mb-5 text-2xl font-bold text-black lg:text-3xl">
                  Trusted by schools nationwide
                </h2>
              </div>
              <div
                className="
                grid grid-cols-2
                gap-16
                text-center
                lg:grid-cols-6"
              >
                <div className="hidden items-center justify-center lg:inline-block">
                  <img
                    src="/images/segment.png"
                    alt="Segment"
                    className="block h-24 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* About Section */}
        
        <div className="mx-auto px-5 pt-10 md:pt-32 pb-6 lg:px-24">
          <div className="my-3 flex w-full flex-col text-left lg:text-center">
            <h2 className="bold mb-8 text-2xl font-bold leading-tight text-black lg:text-5xl">
              Comprehensive School Health{" "}
              <br className="hidden lg:inline-block" />
              at Your Fingertips
            </h2>
          </div>
          <div className="flex w-full flex-col text-left lg:text-center">
            <h3 className=" text-md md:text-2xl text-black">
            From boosting staff morale to engaging parents, we provide the insights and metrics you need for a thriving learning environment. Make data-driven decisions effortlessly, and keep your school community happy and engaged.
            </h3>
          </div>
        </div>

        {/* Features */}

        <div className="mx-auto px-5 py-10 md:pt-32 lg:px-24 text-center text-xl features" id="features">
          <u>Features</u>
        </div>
        <div className="bg-white text-black">
          <div className="mx-auto flex flex-col items-center px-5 md:pt-20 lg:flex-row">
            <div className="mb-16 flex flex-col text-left lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 lg:pr-6">
              <h2 className="mb-4 text-3xl md:text-4xl font-bold leading-none sm:text-5xl">
                School Health Metrics
              </h2>
              <p className="md:text-xl mb-8 leading-relaxed">
                <b>Stay in the Know, Always</b>
                <br/>
                Our tailored metrics allow you to monitor the critical aspects of your preschool, from staff morale to parent engagement. Keep your finger on the pulse and make data-driven decisions with confidence.
              </p>
            </div>
            <div className="lg:w-full lg:max-w-2xl -mt-12 sm:mt-0">
              <img src="/images/metrics.png" alt="img" />
            </div>
          </div>
          <div className="mt-32">
            <div className="mx-auto flex flex-col px-5 md:py-24 text-left lg:flex-row">
              <div className="lg:w-full lg:max-w-xl">
                <img src="/images/insights.png" alt="img" />
              </div>
              <div className="flex flex-col pt-0 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-16 lg:pl-24 lg:pt-24">
                <h2 className="mb-4 text-2xl pt-10 md:text-4xl font-bold leading-none sm:text-5xl">
                  Actionable Insights
                </h2>
                <p className="md:text-xl mb-8 leading-relaxed">
                  <b>Not Just Data, But a Roadmap</b>
                  <br/>
                    Our AI-driven insights dissect the feedback from your community, providing you with actionable items to enhance your preschool's environment. Now you can focus on what really matters.                
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className="max-w-8xl mx-auto px-5 py-24 lg:px-24">
              <div className="my-6 flex w-full flex-col text-left lg:text-center">
                <h2 className="mb-4 text-2xl md:text-4xl font-bold leading-none sm:text-5xl">
                  Context To Every Metric
                </h2>
                <p className="md:text-xl mb-8 leading-relaxed">
                  AI-tagged feedback brings context to each data point, offering a 360-degree view of your institution's strengths and weaknesses. Pinpoint specific areas for improvement to elevate the parent, staff, and school experience.
                </p>
              </div>
              <img src="/images/feedback.png" alt="img" className="hidden sm:inline-block" />
            </div>
          </div>
          
          {/* Private Testimonial */}
          <div className="text-black">
            <div className="max-w-8xl mx-auto flex flex-col px-5 md:pt-48 text-black lg:flex-row">
              <div className="lg:mb-0 lg:w-full lg:max-w-xl">
                <img
                  className="rounded object-cover object-center"
                  alt="image"
                  src="/images/tanner.png"
                />
              </div>
              <div className="items-left flex flex-col pt-16 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-32 lg:pl-48 lg:text-left">
                <h2 className="mb-2 text-lg leading-tight text-gray-700 sm:text-lg">
                  Tanner Lowry
                </h2>
                <h2 className="mb-6 text-lg font-bold sm:text-lg">
                Owner & CEO of Multiple Kids 'R' Kids Franchises
                </h2>
                <h2 className="mb-4 text-3xl font-bold sm:text-3xl">
                  "The depth of insights provided to us by Preschool Pulse has made an immediate impact on our staff and parent experience."
                </h2>
                <a
                  href="/"
                  className="underline-blue mt-12 text-lg font-bold leading-relaxed"
                >
                  See our blog to learn more
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-8xl mx-auto flex flex-col gap-8 px-5 my-28 py-20 text-white lg:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-orange-500 md:rounded-lg shadow-lg">
            <div className="md:px-20">
              <div className="text-2xl md:text-4xl max-w-2xl font-bold">
              Give your school the insights it needs so you can thrive!
              </div>
              <div className="max-w-xl text-lg mt-2">
              Schedule a demo with one of our specialist to talk through what Preschool Pulse can do for your school!  
              </div>
            </div>
            <div>
            <a
                className="bg-white border-2 mt-6 px-8 py-3 text-lg font-semibold tracking-tighter rounded-lg text-black"
                href="/"
              >
                Request a demo
            </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
