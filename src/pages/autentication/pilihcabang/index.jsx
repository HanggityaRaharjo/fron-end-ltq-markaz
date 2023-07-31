import React from "react";
import ltq from "../../../assets/logo/LTQ.png";
import qsc from "../../../assets/logo/QSC.png";
import mulazamah from "../../../assets/logo/MULAZAMAH.png";
import santri from "../../../assets/logo/santri.png";
import mdmqi from "../../../assets/logo/MDMQI.png";
import markazakhwat from "../../../assets/logo/MAA.png";
import kajian from "../../../assets/logo/KAJIANTAFSIR.png";
import mukhoyyam from "../../../assets/logo/MUKHOYYAM.png";

function Card({ image }) {
  return (
    <div className="h-[200px] w-[200px] bg-white rounded-lg shadow-lg active:scale-95 transition duration-150 flex items-center p-2">
      <img src={image} alt="" />
    </div>
  );
}

function SelectBranch() {
  return (
    <section className=" h-[100vh] bg-gradient-to-r from-[#f1fff8] via-[#e6fff2] to-[#f1fff8]">
      <div className="flex h-full justify-center items-center ">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-5">
          <Card image={ltq} />
          <Card image={qsc} />
          <Card image={mulazamah} />
          <Card image={santri} />
          <Card image={mdmqi} />
          <Card image={markazakhwat} />
          <Card image={kajian} />
          <Card image={mukhoyyam} />
        </div>
      </div>
    </section>
  );
}

export default SelectBranch;
