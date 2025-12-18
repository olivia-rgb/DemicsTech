import * as React from "react";

function Contact() {
  return (
    <div
      className="relative flex flex-col items-center justify-start w-full my-5 bg-cover bg-center"
    >
      <div className="flex flex-col items-center w-full max-w-[1200px] px-20 pt-12 pb-24 text-lg text-white max-md:px-4 max-md:pt-8 max-md:pb-16">
        <div
          className="flex flex-col justify-center items-center w-full px-20 py-28 rounded-xl shadow-lg max-w-full max-md:px-4 max-md:py-10"
          style={{
            background: "linear-gradient(135deg, #1565C0, #0D47A1, #1565C0)", // Dark green to black gradient
          }}
        >
          <div className="flex flex-col items-center w-full max-w-[833px]">
            <div className="text-6xl font-bold tracking-tighter leading-none text-center max-md:text-2xl max-md:leading-snug">
              Need to hear from us directly?
            </div>
            <div className="mt-5 text-center max-md:mt-2 max-md:text-base">
              Get in touch with one of our experts via our corporate email channel
            </div>
            <div className="flex gap-3 items-center px-6 py-3 mt-6 font-medium rounded-2xl bg-white text-blue-950 max-md:gap-2 max-md:px-4 max-md:py-2 max-md:mt-4">
              <div>Send Mail</div>
              <img src="/circle.png" className="w-10"  alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
