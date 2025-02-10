import React from "react";
import Image from "next/image";
import Tikets from "@/app/assets/Tikets.png";
import Ppay from "@/app/assets/ppay.png";

function Project() {
  return (
    <div className="mt-20 flex flex-col justify-center items-center gap-20">
      <span className="text-6xl font-bold">My Project</span>
      <div className="flex gap-10">
        <section className="bg-gray-400 p-10 rounded-3xl max-w-2xl space-y-5 shadow-blue-950 shadow-2xl">
          <Image src={Tikets} alt="" width={600} height={600}></Image>
          <div>
            <span className="font-bold italic">Description : </span>
            <p>
              A web-based application for booking cinema tickets, accessible via
              smartphone or PC browser.
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold italic">Technologies Used : </span>
              React.js, Tailwind CSS, Node.js, Golang, PostgreSQL
            </p>
          </div>
          <div>
            <span className="font-bold italic">Role : </span>
            <p>
              Sole developer responsible for designing and implementing the
              frontend interface, ensuring responsiveness and user-friendly
              design.
            </p>
          </div>
          <div>
            <span className="font-bold italic">Key Contributions : </span>
            <ul className="list-disc pl-10">
              <li>Developed the frontend using React.js and Tailwind CSS.</li>
              <li>
                Ensured cross-browser compatibility and mobile responsiveness.
              </li>
              <li>
                Integrated the frontend with backend services for ticket booking
                functionality.
              </li>
              <li>
                Developed the backend using Golang with Framework Gin-Gonic
              </li>
            </ul>
          </div>
        </section>
        <section className="bg-gray-400 p-10 rounded-3xl max-w-2xl space-y-5 shadow-blue-950 shadow-2xl">
          <Image src={Ppay} alt="" width={600} height={600}></Image>
          <div>
            <span className="font-bold italic">Description : </span>
            <p>
              A web-based application for booking cinema tickets, accessible via
              smartphone or PC browser.
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold italic">Technologies Used : </span>
              React.js, Tailwind CSS, Node.js, Golang, PostgreSQL
            </p>
          </div>
          <div>
            <span className="font-bold italic">Role : </span>
            <p>
              Sole developer responsible for designing and implementing the
              frontend interface, ensuring responsiveness and user-friendly
              design.
            </p>
          </div>
          <div>
            <span className="font-bold italic">Key Contributions : </span>
            <ul className="list-disc pl-10">
              <li>Developed the frontend using React.js and Tailwind CSS.</li>
              <li>
                Ensured cross-browser compatibility and mobile responsiveness.
              </li>
              <li>
                Integrated the frontend with backend services for ticket booking
                functionality.
              </li>
              <li>
                Developed the backend using Golang with Framework Gin-Gonic
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Project;
