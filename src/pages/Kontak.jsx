import React from "react";
import NavLanding from "../layouts/NavLanding";
import LayoutColumn from "../layouts/LayoutColumn";

function Kontak() {
  return (
    <LayoutColumn>
      <section className=" kontak pt-20 h-[100vh] bg-[#f2fff9] relative ">
        <div className=" lg:flex justify-center pt-20 absolute top-[250px] right-[15px] lg:-left-[10px] lg:top-[25px]">
          <h1 className="text-[50px]">Lest</h1>
          <h1 className="text-[50px]">Have</h1>
          <h1 className="text-[50px]">A</h1>
          <h1 className="text-[50px]">Talk</h1>
        </div>
        <div className="h-full flex items-end ">
          <div className="grid grid-cols-1 lg:grid-cols-3 ">
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63374.17817952167!2d107.610112!3d-6.9042176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1690215709855!5m2!1sen!2sid"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=" h-[450px] w-[650px]"
              />
            </div>

            <div className="bg-gray-300 h-full w-full">
              <div className="flex justify-center items-center h-full">
                <div className="w-[400px]">
                  <h1 className="text-[30px] mb-10">Meet us</h1>
                  <a href="" className="flex items-center gap-5 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    087688654667
                  </a>
                  <a href="" className="flex items-center gap-5 py-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>
                    MarkazLTQ@gmail.com
                  </a>
                  <a href="" className="flex items-center gap-5 py-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    MarkazLTQ@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 h-full w-full">
              <div className="flex justify-center items-center h-full">
                <div className="w-[400px]">
                  <h1 className="text-[30px] mb-14">Pitch us</h1>
                  <h1 className="pt-5">Hello</h1>
                  <p className="pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem inventore itaque quasi nemo corporis laboriosam
                    veniam ducimus vitae recusandae laborum.
                  </p>
                  <button className="mt-5 bg-[#169859] w-32 p-2 rounded-full">
                    <span>send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutColumn>
  );
}

export default Kontak;
