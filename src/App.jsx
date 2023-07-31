import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Kontak } from "./pages/index";
import { FormBiodataSiswa } from "./pages/peserta";
import LandingPageMaster from "./pages/LandingPageMaster";
import TentangKami from "./pages/TentangKami";

import Faq from "./pages/Faq";
import LtqMqi from "./pages/cabang/LtqMqi";
import Mdmqi from "./pages/cabang/Mdmqi";
import Qsc from "./pages/cabang/Qsc";
import SantriNusantara from "./pages/cabang/SantriNusantara";
import RqAkhwat from "./pages/cabang/RqAkhwat";
import MulazamahAkhwat from "./pages/cabang/MulazamahAkhwat";
import Login from "./pages/autentication/Login";
import Register from "./pages/autentication/Register";
import DaftarTahsinTahfidz from "./pages/pendaftaran/daftarTahsin/DaftarTahsinTahfidz";
import DaftarTalaqqi from "./pages/pendaftaran/daftarTalaqqi/DaftarTalaqqi";
import DaftarTahsinBiodata from "./pages/pendaftaran/daftarTahsin/DaftarTahsinBiodata";
import DaftarTahsinHari from "./pages/pendaftaran/daftarTahsin/DaftarTahsinHari";
import DaftarTalaqqiBiodata from "./pages/pendaftaran/daftarTalaqqi/DaftarTalaqqiBiodata";
import PlacementTest from "./pages/pendaftaran/placement-test";
import PilihanGanda from "./pages/ujian/pilihan-ganda";
import PilihanProgram from "./pages/pendaftaran/pilihan-program";
import BiayaPendidikan from "./pages/pendaftaran/biaya-pendidikan";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  // Daftar Tahsin

  {
    path: "/daftartahsintahfidz",
    element: <DaftarTahsinTahfidz />,
  },
  {
    path: "/daftartahsinBiodata",
    element: <DaftarTahsinBiodata />,
  },
  {
    path: "/daftartahsinhari",
    element: <DaftarTahsinHari />,
  },

  // Daftar Talaqqi

  {
    path: "/daftartalaqqi",
    element: <DaftarTalaqqi />,
  },
  {
    path: "/daftartalaqqibiodata",
    element: <DaftarTalaqqiBiodata />,
  },

  {
    path: "/",
    element: <LandingPageMaster />,
  },
  {
    path: "/ltqmqi",
    element: <LtqMqi />,
  },
  {
    path: "/mdmqi",
    element: <Mdmqi />,
  },
  {
    path: "/qsc",
    element: <Qsc />,
  },
  {
    path: "/santri",
    element: <SantriNusantara />,
  },
  {
    path: "/mulazamah",
    element: <MulazamahAkhwat />,
  },
  {
    path: "/rqakhwat",
    element: <RqAkhwat />,
  },
  {
    path: "/tentang",
    element: <TentangKami />,
  },
  {
    path: "/kontak",
    element: <Kontak />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/peserta-baru/biodata-siswa",
    element: <FormBiodataSiswa />,
  },
  {
    path: "/peserta-baru/pilihan-program",
    element: <PilihanProgram />,
  },
  {
    path: "/peserta-baru/biaya-pendidikan",
    element: <BiayaPendidikan />,
  },
  {
    path: "/daftar-ulang/biaya-pendidikan",
    element: <BiayaPendidikan />,
  },
  {
    path: "/placement-test",
    element: <PlacementTest />,
  },
  {
    path: "/placement-test/pilihan-ganda",
    element: <PilihanGanda />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
