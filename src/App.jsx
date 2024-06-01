import React from "react";
import AOS from "aos";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineWhatsApp, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import pp from "./7.png";
import design from "./design.png";
import code from "./code.png";
import consulting from "./consulting.png";

import web1 from "./1.jpg";
import web2 from "./2.jfif";
import web3 from "./3.jfif";
import web4 from "./4.jpg";
import web5 from "./5.jpg";
import web6 from "./6.jpg";
import greennbull from "./greenbull.png";
import sneakers from "./sneakers.png";
import kasir from "./kasir.png";
import goblog from "./goblog.png";
import livewire from "./livewire.png";
import cruddasar from "./cruddasar.png";
import stokbarang from "./stokbarang.jpeg";
import penduduk from "./penduduk.jpeg";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  AOS.init({
    duration: 1000,
  });

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        {/* //section1 */}
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <div className="flex">
              <p>
                <CiUser className="text-2xl mx-2 text-teal-500" />
              </p>
              <h1 className="text-xl text-teal-500 font-burtons">MY PORTFOLIO</h1>
            </div>
            <ul className="flex item-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl dark:text-white" onClick={() => setDarkMode(!darkMode)} />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:opacity-80 ease-in-out duration-300"
                  href="https://drive.google.com/file/d/1xMLWD8_qS31kEATcSMuKXNWJ-sPUH9fh/view"
                  target="_blank"
                >
                  RESUME
                </a>
              </li>
            </ul>
          </nav>

          <div className="lg:flex">
            <div className="text-center p-10">
              <h2 data-aos="fade-right" className="text-5xl py-2 text-teal-500 font-medium md:text-6xl">
                Renold Herlandi
              </h2>

              <h3 data-aos="fade-left" className="text-2xl py-2 md:text-3xl dark:text-white">
                Multimedia.
              </h3>

              <p data-aos="fade-right" className="text-md py-5 leading-7 mx-auto text-gray-800 md:text-xl md:max-w-xl dark:text-slate-100">
                Hello... Selamat datang diportfolio saya, yang dimana saya ingin memberitahukan kemampuan ataupun keterampilan saya dibidang berbasis program ataupun non-program.
              </p>

              <div className="my-4 sm:my-4 md:my-4">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md hover:opacity-80 ease-in-out duration-300"
                  href="https://drive.google.com/file/d/1xMLWD8_qS31kEATcSMuKXNWJ-sPUH9fh/view"
                  target="_blank"
                >
                  Klik Disini Untuk Melihat CV Saya
                </a>
              </div>

              <div className="text-5xl flex justify-center gap-16 py-2 text-gray-800 md:text-6xl">
                <a data-aos="fade-right" href="https://api.whatsapp.com/send?phone=6289626033902" target="_blank">
                  <AiOutlineWhatsApp className="text-gray-600 hover:scale-125 ease-in-out duration-300 hover:text-teal-500 dark:text-slate-100 dark:hover:text-teal-500 hover:cursor-pointer" />
                </a>

                <a data-aos="fade-up" href="https://www.instagram.com/hi_hr_hr/" target="_blank">
                  <AiFillInstagram className="text-gray-600 hover:scale-125 ease-in-out duration-300 hover:text-teal-500 dark:text-slate-100 dark:hover:text-teal-500 hover:cursor-pointer" />
                </a>

                <a data-aos="fade-left" href="https://github.com/herlandi619" target="_blank">
                  <AiFillGithub className="text-gray-600 hover:scale-125 ease-in-out duration-300 hover:text-teal-500 dark:text-slate-100 dark:hover:text-teal-500 hover:cursor-pointer" />{" "}
                </a>
              </div>
            </div>

            <div data-aos="flip-left" className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden hover:scale-105 ease-in-out duration-300 md:w-96 md:h-96 lg:-my-1 lg:-mx-5 ">
              <img src={pp} layout="fill" objectFit="cover" className=" pt-10 pl-10 md:pl-16 md:pt-24 hover:scale-110 ease-in-out duration-300"  />
            </div>
          </div>
        </section>

        {/* //section2 */}
        <section className="my-56">
          <div className="flex mx-auto lg:gap-5">
            <div className="lg:basis-1/3 lg:my-32">
              <hr />
            </div>

            <div data-aos="zoom-in" className="my-10">
              <h3 className="text-teal-500 md:text-center lg:text-center text-3xl py-1">Selain Itu.</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-100">
                Saya tipe orang yang bertanggung jawab dan <span className="text-teal-500">handal</span> dalam mengerjakan tugas-tugas dan mampu bekerja dengan <span className="text-teal-500">baik</span> atas inisiatif saya sendiri ataupun
                dalam tim. Dan diantara lain soft skill saya dalam berikut:
              </p>
            </div>

            <div className="lg:basis-1/3 lg:my-32">
              <hr />
            </div>
          </div>

          <div className="lg:flex gap-10 ">
            <div data-aos="fade-left" className="text-center shadow-lg p-10 rounded-xl my-5 hover:scale-110 ease-in-out duration-300 dark:bg-slate-100">
              <img src={code} width={100} height="100" className="mx-auto hover:scale-125 ease-in-out duration-300" />
              <h3 className="text-lg font-medium pt-8 pb-2">Menguasai Microsoft Office</h3>
              {/* <p className="py-2">Menguasai Microsoft Office </p> */}
              <h4 className="py-4 text-teal-600">Software yang saya gunakan</h4>
              <p className="text-gray-800 py-1">Microsoft Excel</p>
              <p className="text-gray-800 py-1">Microsoft Word</p>
              <p className="text-gray-800 py-1">Microsoft Power Point</p>
            </div>

            <div data-aos="fade-right" className="text-center shadow-lg p-10 rounded-xl my-5 hover:scale-110 ease-in-out duration-300 dark:bg-slate-100">
              <img src={consulting} width={100} height="100" className="mx-auto hover:scale-125 ease-in-out duration-300" />
              <h3 className="text-lg font-medium pt-8 pb-2">Membuat Desain Software Dan Video Editor</h3>
              {/* <p className="py-2">Membuat Desain Software Dan Video Editor</p> */}
              <h4 className="py-4 text-teal-600">Software yang saya gunakan</h4>
              <p className="text-gray-800 py-1">Adobe Photoshop 2014</p>
              <p className="text-gray-800 py-1">Ace Movi Video Editor</p>
              <p className="text-gray-800 py-1">Wonder-Share Filmora Video Editor</p>
            </div>

            <div data-aos="fade-left" className="text-center shadow-lg p-10 rounded-xl my-5 hover:scale-110 ease-in-out duration-300 dark:bg-slate-100">
              <img src={design} width={100} height="100" className="mx-auto hover:scale-125 ease-in-out duration-300" />
              <h3 className="text-lg font-medium pt-8 pb-2">Menguasai Dasar Desain Web</h3>
              {/* <p className="py-2">Menguasai Dasar Desain Web</p> */}
              <h4 className="py-4 text-teal-600">Software yang saya gunakan</h4>
              <p className="text-gray-800 py-1">Bootstrap Framework CSS</p>
              <p className="text-gray-800 py-1">Tailwind-Css Framework CSS</p>
              <p className="text-gray-800 py-1">Laravel 8 Framework PHP</p>
              <p className="text-gray-800 py-1">Dan Database MYSQL Framework SQL</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex mx-auto lg:gap-10 lg:mt-16 ">
            <div className="lg:basis-1/3 lg:my-36">
              <hr className="mt-10" />
            </div>

            <div data-aos="zoom-in" className="leading-8">
              <h3 className="text-3xl text-teal-500 py-1 md:text-center lg:text-center mt-28 ">Hasil Project Website Statis Dan Dinamis</h3>
              <p className="dark:text-slate-200">Dan selain itu, berikut adalah hasil project-project dasar belajar saya, dari web statis maupun web yang interaktif yang menggunakan database langsung.</p>
            </div>

            <div className="lg:basis-1/3 lg:my-36">
              <hr className="mt-10" />
            </div>
          </div>

          <div data-aos="zoom-in-left" className="mt-5 grid gap-10  lg:grid-cols-3 text-md">
            <div className="grid gap-2 shadow-lg rounded-xl overflow-hidden  hover:scale-110 duration-300 ease-in-out cursor-pointer   dark:bg-slate-100">
              <img src={greennbull} alt="greenbull" />
              <div className="p-5">
                <p className="h-32 overflow-auto">
                  Contoh web single page <span className="text-teal-500">antivirus</span> yang dibuat menggunakan Tailwindcss full Responsiv Mobile, Tab dan Desktop
                </p>
              </div>
              <div className="mt-3">
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md  hover:opacity-80 ease-in-out duration-300 relative right-3" href="https://herlandi619.github.io/greenbull/#" target={"_blank"}>
                  Selengkapnya Klik disini
                </a>
              </div>
            </div>

            <div data-aos="zoom-in-right" className="grid gap-2 shadow-lg rounded-xl overflow-hidden  hover:scale-110 duration-300 ease-in-out cursor-pointer dark:bg-slate-100">
              <img src={kasir} alt="kasir" />
              <div className="p-5">
                <p className="h-32 overflow-auto">
                  Contoh web company profile <span className="text-teal-500">Kasir</span> yang dibuat menggunakan Tailwindcss full Responsiv Mobile{" "}
                </p>
              </div>
              <div className="mt-3">
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md  hover:opacity-80 ease-in-out relative right-3 duration-300" href="https://herlandi619.github.io/samurai-pos-x/" target={"_blank"}>
                  Selengkapnya Klik disini
                </a>
              </div>
            </div>

            <div data-aos="zoom-in-left" className="grid gap-2 shadow-lg rounded-xl overflow-hidden  hover:scale-110 duration-300 ease-in-out cursor-pointer dark:bg-slate-100">
              <img src={sneakers} alt="sneakers" />
              <div className="p-5">
                <p className="h-32 overflow-auto">
                  Contoh web company profile <span className="text-teal-500">Toko online</span> sepatu yang dibuat menggunakan Tailwindcss full Responsiv Mobile
                </p>
              </div>
              <div className="mt-3 ">
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md relative right-3  hover:opacity-80 ease-in-out duration-300" href="https://herlandi619.github.io/sneakers/" target={"_blank"}>
                  Selengkapnya Klik disini
                </a>
              </div>
            </div>

            <div data-aos="zoom-in-right" className="grid gap-2 shadow-lg rounded-xl overflow-hidden  hover:scale-110 duration-300 ease-in-out cursor-pointer dark:bg-slate-100">
              <img src={goblog} alt="kasir" />
              <div className="p-5">
                <p className="h-32 overflow-auto">
                  Contoh Aplikasi Web <span className="text-teal-500">Blog</span> yang dibuat menggunakan Laravel 8 + Bootstrap dan menggunakan database Mysql dasar + CRUD{" "}
                </p>
              </div>
              <div className="mt-3">
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md  hover:opacity-80 ease-in-out relative right-3 duration-300" href="https://herland619.000webhostapp.com/" target={"_blank"}>
                  Selengkapnya Klik disini
                </a>
              </div>
            </div>

            <div data-aos="zoom-in-right" className="grid gap-2 shadow-lg rounded-xl overflow-hidden  hover:scale-110 duration-300 ease-in-out cursor-pointer dark:bg-slate-100">
              <img src={livewire} alt="kasir" />
              <div className="p-5">
                <p className="h-32 overflow-auto">
                  Contoh CRUD <span className="text-teal-500">LIVEWIRE</span> dasar yang dibuat menggunakan Laravel 8 + Bootstrap 5 dan Livewire 2, kemudian menggunakan database Mysql dasar + CRUD{" "}
                </p>
              </div>
              <div className="mt-3">
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md  hover:opacity-80 ease-in-out relative right-3 duration-300" href="https://herlandi619.000webhostapp.com/" target={"_blank"}>
                  Selengkapnya Klik disini
                </a>
              </div>
            </div>

            <div data-aos="zoom-in-right" className="grid gap-2 shadow-lg rounded-xl overflow-hidden  hover:scale-110 duration-300 ease-in-out cursor-pointer dark:bg-slate-100">
              <img src={cruddasar} alt="kasir" />
              <div className="p-5">
                <p className="h-32 overflow-auto">
                  Contoh CRUD dasar <span className="text-teal-500">Laravel</span> dasar yang dibuat menggunakan Laravel 8 + Bootstrap 5
                </p>
              </div>
              <div className="mt-3">
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md  hover:opacity-80 ease-in-out relative right-3 duration-300" href="https://herland004.000webhostapp.com/pegawai" target={"_blank"}>
                  Selengkapnya Klik disini
                </a>
              </div>
            </div>
            <div data-aos="zoom-in-right" className="grid gap-2 shadow-lg rounded-xl overflow-hidden  hover:scale-110 duration-300 ease-in-out cursor-pointer dark:bg-slate-100">
              <img src={stokbarang} alt="kasir" />
              <div className="p-5">
                <p className="h-32 overflow-auto">
                  Contoh Aplikasi <span className="text-teal-500">Stok Barang</span> dasar yang dibuat menggunakan PHP & MYSQL + Bootstrap 5
                </p>
              </div>
              <div className="mt-3">
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md  hover:opacity-80 ease-in-out relative right-3 duration-300" href="https://stokbarang002.000webhostapp.com/login.php" target={"_blank"}>
                  Selengkapnya Klik disini
                </a>
              </div>
            </div>

            <div data-aos="zoom-in-right" className="grid gap-2 shadow-lg rounded-xl overflow-hidden  hover:scale-110 duration-300 ease-in-out cursor-pointer dark:bg-slate-100">
              <img src={penduduk} alt="kasir" />
              <div className="p-5">
                <p className="h-32 overflow-auto">
                  Contoh Aplikasi Manage Data <span className="text-teal-500">Penduduk</span> dasar yang dibuat menggunakan PHP & MYSQL + Bootstrap 5
                </p>
              </div>
              <div className="mt-3">
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md  hover:opacity-80 ease-in-out relative right-3 duration-300" href="https://pdpucung001.000webhostapp.com/login.php" target={"_blank"}>
                  Selengkapnya Klik disini
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* section 3 */}
        <section className="lg:-mt-36">
          <div className="flex mx-auto lg:gap-10 lg:mt-36">
            <div className="lg:basis-1/3 lg:my-36">
              <hr className="mt-48" />
            </div>

            <div data-aos="zoom-in" className="leading-8">
              <h3 className="text-3xl py-1 text-teal-500 md:text-center mt-52  lg:text-center">Tentang Saya</h3>
              <p className="dark:text-slate-200">
                nama saya <span className="text-teal-600">Renold Herlandi</span>, saat ini yang sudah menempuh pendidikan SMK, Yang dimana saya memiliki <span className="text-teal-600">motivasi</span> besar utuk mendapatkan{" "}
                <span className="text-teal-600">impian</span> dan mempelajari pengetahuan baru.
              </p>
              <p className="dark:text-slate-200 my-5">
                dan selain itu saya <span className="text-teal-600">Bertanggung Jawab</span> dan handal dalam mengerjakan tugas-tugas dan mampu bekerja dengan baik atas <span className="text-teal-600">Inisiatif</span> saya sendiri ataupun
                dalam tim.
              </p>
            </div>

            <div className="lg:basis-1/3 lg:my-36">
              <hr className="mt-48" />
            </div>
          </div>

          <div className="flex mx-auto lg:gap-10 lg:mt-16">
            <div className="lg:basis-1/3 lg:my-36">
              <hr className="mt-10" />
            </div>

            <div data-aos="zoom-in" className="leading-8">
              <h3 className="text-3xl text-teal-500 py-1 md:text-center mt-28  lg:text-center">Manipulasi Photoshop</h3>
              <p className="dark:text-slate-200">Dan selain itu juga saya sangat suka bermain dengan memanipulasi gambar-gambar yang bersifat random atau fantasy.</p>
            </div>

            <div className="lg:basis-1/3 lg:my-36">
              <hr className="mt-10" />
            </div>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap lg:mt-10">
            <div data-aos="flip-left" className="basis-1/3 flex-1">
              <img src={web1} className="rounded-lg object-cover lg:w-full hover:scale-110 ease-in-out duration-300 cursor-pointer" />
            </div>

            <div data-aos="flip-right" className="basis-1/3 flex-1">
              <img src={web2} className="rounded-lg object-cover lg:w-full hover:scale-110 ease-in-out duration-300 cursor-pointer" />
            </div>

            <div data-aos="flip-left" className="basis-1/3 flex-1">
              <img src={web3} className="rounded-lg object-cover hover:scale-110 ease-in-out duration-300 cursor-pointer" />
            </div>

            <div data-aos="flip-right" className="basis-1/3 flex-1">
              <img src={web4} className="rounded-lg object-cover lg:-mt-28 hover:scale-110 ease-in-out duration-300 cursor-pointer" />
            </div>

            <div data-aos="flip-left" className="basis-1/3 flex-1">
              <img src={web5} className="rounded-lg object-cover hover:scale-110 ease-in-out duration-300 cursor-pointer" />
            </div>

            <div data-aos="flip-right" className="basis-1/3 flex-1">
              <img src={web6} className="rounded-lg object-cover lg:-mt-72 hover:scale-110 ease-in-out duration-300 cursor-pointer" />
            </div>
          </div>
        </section>

        <section className="mt-20 pb-24">
          <hr />
          <div className="mt-10 pb-10 md:flex lg:flex">
            <div className="text-5xl basis-1/2 flex justify-center gap-16 py-2 text-gray-800 md:text-6xl">
              <a data-aos="fade-right" href="https://api.whatsapp.com/send?phone=6289626033902" target="_blank">
                <AiOutlineWhatsApp className="text-gray-600 hover:scale-125 ease-in-out duration-300 hover:text-teal-500 dark:text-slate-100 dark:hover:text-teal-500 hover:cursor-pointer" />
              </a>

              <a data-aos="fade-down" href="https://www.instagram.com/hi_hr_hr/" target="_blank">
                <AiFillInstagram className="text-gray-600 hover:scale-125 ease-in-out duration-300 hover:text-teal-500 dark:text-slate-100 dark:hover:text-teal-500 hover:cursor-pointer" />
              </a>

              <a data-aos="fade-left" href="https://github.com/herlandi619" target="_blank">
                <AiFillGithub className="text-gray-600 hover:scale-125 ease-in-out duration-300 hover:text-teal-500 dark:text-slate-100 dark:hover:text-teal-500 hover:cursor-pointer" />{" "}
              </a>
            </div>

            <div data-aos="fade-up" className="text-center pt-6 basis-1/2 md:text-center lg:text-center">
              <p className="font-bold dark:text-slate-200">Alamat / Kontak</p>
              <h2 className="text-4xl text-teal-500">Tentang Saya??</h2>
              <div className="grid gap-1 mt-3 text-sm">
                <p className="dark:text-slate-200">herlandi619@gmail.com</p>
                <p className="dark:text-slate-200">Pondok Pucung Kec.Pondok Aren</p>
                <p className="dark:text-slate-200">Tangerang Selatan</p>
                <p className="dark:text-slate-200">0896-2603-3902</p>
              </div>
            </div>
          </div>

          <p className="text-center text-xs dark:text-slate-200">
            Copyright <span className="font-bold text-teal-500 ">Renold Herlandi</span> || ReacJs + Tailwind-CSS
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
