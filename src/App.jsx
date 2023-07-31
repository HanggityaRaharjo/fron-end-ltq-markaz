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
import MulazamahAkhwat from "./pages/cabang/MulazamahAkhwat";
import Login from "./pages/autentication/Login";
import Register from "./pages/autentication/Register";
import DaftarTahsinTahfidz from "./pages/pendaftaran/daftarTahsin/DaftarTahsinTahfidz";
import DaftarTalaqqi from "./pages/pendaftaran/daftarTalaqqi/DaftarTalaqqi";
import DaftarTahsinBiodata from "./pages/pendaftaran/daftarTahsin/DaftarTahsinBiodata";
import DaftarTahsinHari from "./pages/pendaftaran/daftarTahsin/DaftarTahsinHari";
import DaftarTalaqqiBiodata from "./pages/pendaftaran/daftarTalaqqi/DaftarTalaqqiBiodata";
import DaftarTalaqqiHari from "./pages/pendaftaran/daftarTalaqqi/DaftarTalaqqiHari";
import Profil from "./pages/profil";
import FormCuti from "./pages/formCuti";
import SelectBranch from "./pages/autentication/pilihcabang";
import SelectRole from "./pages/admin/checkboxRole";
import Mukhoyyam from "./pages/cabang/mukhoyyam";
import MarkazAlquranAkhwat from "./pages/cabang/markazAlquranAkhwat";
import KajianTafsir from "./pages/cabang/kajianTafsir";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/pilihcabang",
    element: <SelectBranch />,
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
    path: "/daftartalaqqihari",
    element: <DaftarTalaqqiHari />,
  },

  {
    path: "/",
    element: <LandingPageMaster />,
  },

  // cabang

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
    path: "/mukhoyyam",
    element: <Mukhoyyam />,
  },
  {
    path: "/markazalquranakhwat",
    element: <MarkazAlquranAkhwat />,
  },
  {
    path: "/kajiantafsir",
    element: <KajianTafsir />,
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

  // Admin
  {
    path: "/selectrole",
    element: <SelectRole />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profil",
    element: <Profil />,
  },
  {
    path: "/formcuti",
    element: <FormCuti />,
  },
  {
    path: "/peserta-baru",
    element: <FormBiodataSiswa />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
