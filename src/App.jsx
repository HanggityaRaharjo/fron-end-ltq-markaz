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
import Mukhoyyam from "./pages/cabang/mukhoyyam";
import MarkazAlquranAkhwat from "./pages/cabang/markazAlquankhwat";
import KajianTafsir from "./pages/cabang/kajianTafsir";
import SelectBranch from "./pages/autentication/pilihcabang";
import PengaturanCabang from "./pages/adminCabang/pengaturanCabang";
import UserManager from "./pages/adminCabang/userManager";
import TambahUser from "./pages/adminCabang/userManager/tambahUser";
import UserRole from "./pages/adminCabang/userRole";
import OtoritasMenu from "./pages/adminCabang/otoritasMenu";
import PengaturanKelas from "./pages/adminCabang/pengaturanKelas";
import PengatuanProgram from "./pages/adminCabang/pengaturanProgram";
import PengaturanSoal from "./pages/adminCabang/pengaturanSoal";
import DashboardCabang from "./pages/adminCabang/dashboard";
import PilihProgram from "./pages/pilihProgramKelas";
import Pembayaran from "./pages/pembayaran";
import LevelPeserta from "./pages/levelPeserta";
import StatusPembayaran from "./pages/pembayaran/statusPembayaran";
import CountdownPembayaran from "./pages/countdownPambayaran";
import PendaftaranGuru from "./pages/guru/pendaftaran";
import InputnilaiSiswa from "./pages/guru/inputNilai";
import PresensiKehadiran from "./pages/guru/presensiKehadiran";

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
    path: "/kajianrafsir",
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
  {
    path: "/pilih-program",
    element: <PilihProgram />,
  },
  {
    path: "/pembayaran",
    element: <Pembayaran />,
  },
  {
    path: "/transfer-pembayaran/",
    element: <CountdownPembayaran />,
  },
  {
    path: "/status-pembayaran",
    element: <StatusPembayaran />,
  },
  {
    path: "/level-peserta",
    element: <LevelPeserta />,
  },

  // Guru
  {
    path: "/pendaftaran-guru",
    element: <PendaftaranGuru />,
  },
  {
    path: "/input-nilai",
    element: <InputnilaiSiswa />,
  },
  {
    path: "/presensi-kehadiran",
    element: <PresensiKehadiran />,
  },


  // Admin Cabang

  {
    path: "/dashboard-cabang",
    element: <DashboardCabang />,
  },
  {
    path: "/pengaturan-cabang",
    element: <PengaturanCabang />,
  },
  {
    path: "/usermanager",
    element: <UserManager />,
  },
  {
    path: "/tambah-user",
    element: <TambahUser />,
  },
  {
    path: "/user-role",
    element: <UserRole />,
  },
  {
    path: "/otoritas-menu",
    element: <OtoritasMenu />,
  },
  {
    path: "/pengaturan-kelas",
    element: <PengaturanKelas />,
  },
  {
    path: "/pengaturan-program",
    element: <PengatuanProgram />,
  },
  {
    path: "/pengaturan-soal",
    element: <PengaturanSoal />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
