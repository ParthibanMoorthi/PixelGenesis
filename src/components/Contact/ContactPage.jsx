import FullScreenLayout from "../FullScreenLayout";
import contactBg from "../../../src/assets/contactBg.svg";
import contactInputBg from "../../../src/assets/contactInputBg.svg";

function ContactPage() {
  return (
    <FullScreenLayout>
      <div
        className="min-h-screen w-full flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        {/* Heading */}
        <p className="font-bold text-start leading-tight text-[18px] sm:text-[28px] md:text-[36px] lg:text-[40px] text-white mb-8 w-full max-w-4xl">
          Contact Us
        </p>

        {/* Container with background image */}
        <div
          className="relative w-full max-w-4xl px-6 sm:px-12 py-8 sm:py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 bg-center bg-no-repeat bg-contain rounded-xl"
          style={{ backgroundImage: `url(${contactInputBg})` }}
        >
          {/* Left: Contact Form */}
          <div className="flex items-center justify-center w-full">
            <form className="flex flex-col gap-3 sm:gap-4 w-full max-w-md">
              <input
                type="text"
                placeholder="Name"
                className="w-full text-[14px] sm:text-[15px] px-2 py-1 sm:py-2 bg-transparent border-b-2 text-white border-gray-300 placeholder-gray-200 focus:border-yellow-400 focus:outline-none transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full text-[14px] sm:text-[15px] px-2 py-1 sm:py-2 bg-transparent border-b-2 text-white border-gray-300 placeholder-gray-200 focus:border-yellow-400 focus:outline-none transition"
              />
              <input
                type="text"
                placeholder="Contact No"
                className="w-full text-[14px] sm:text-[15px] px-2 py-1 sm:py-2 bg-transparent border-b-2 text-white border-gray-300 placeholder-gray-200 focus:border-yellow-400 focus:outline-none transition"
              />
              <textarea
                placeholder="Your Message"
                rows={3}
                className="w-full text-[14px] sm:text-[15px] px-2 py-1 sm:py-2 bg-transparent border-b-2 text-white border-gray-300 placeholder-gray-200 focus:border-yellow-400 focus:outline-none transition resize-none"
              />
              <div className="flex items-center justify-end mt-4">
                <button
                  type="submit"
                  className="w-1/2 py-2 text-[16px] sm:text-[18px] bg-white text-black font-[500] rounded-lg hover:bg-yellow-500 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Right: Map */}
          <div className="w-full max-w-xs h-[250px] sm:h-[300px] md:h-[360px] flex items-center justify-center rounded-2xl overflow-hidden mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019632849574!2d-122.41941548468148!3d37.77492977975927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ef5d49b3%3A0x2c9f5e9d8c29f3c8!2sSan%20Francisco!5e0!3m2!1sen!2sin!4v1696736517923!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </FullScreenLayout>
  );
}

export default ContactPage;
