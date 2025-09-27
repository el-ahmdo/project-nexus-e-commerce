const Footer = () => {
  return (
    <section className="overscroll-y-none">
      <footer className="bg-[#0B2E15] pt-8 ">
        <div className="px-2 max-w-screen-xl mx-auto">
          <hr className="border-none h-[0.5px] mt-10 bg-[#134E24] mb-6" />

          <div className="flex  justify-center items-center px-3  pb-12">
            <div className="flex flex-col md:flex-row w-full md:w-2/3 gap-6 bg-[#0F3D1C] rounded-3xl px-4 py-6 md:px-4 md:py-3">
              <div className="flex-1 px-1 sm:px-2 flex flex-col justify-center">
                <h3 className="text-[#fefefb] font-extralight  text-base sm:text-lg md:text-xl mb-4 md:mb-8 leading-snug">
                  For More Enquiries{" "}
                </h3>

                <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 p-3 rounded-xl bg-[#0B2E15] text-white placeholder-[#fefefb] font-extralight focus:outline-none transition md:w-1/6"
                  />
                  <button className="sm:w-[140px] text-sm w-full py-3 px-4 bg-[#147A06] text-white rounded-full hover:bg-[#0A5E2D] transition duration-200 font-normal cursor-pointer">
                    Submit
                  </button>
                </div>

                <p className="mt-1 text-[#557C4C] text-xs font-light">
                  We never share your information with third parties.
                </p>
              </div>

              <div className="hidden md:flex md:w-1/3 h-full overflow-hidden rounded-md items-center justify-end"></div>
            </div>
          </div>

          <hr className="border-none h-[0.5px] mt-10 bg-[#134E24] mb-6" />
        </div>
      </footer>
    </section>
  );
};

export default Footer;
