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
import BuatSoal from "./pages/adminCabang/pengaturanSoal/BuatSoal";
import PengaturanUser from "./pages/adminCabang/user";
import BuatKelas from "./pages/adminCabang/pengaturanKelas/BuatKelas";

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
    // --------------------------------------------- Peserta ------------------------------
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
  // --------------------------------------------- End Peserta ------------------------------
  // --------------------------------------------- Guru ------------------------------
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
    // --------------------------------------------- End Guru ------------------------------
  },

  // --------------------------------------------- Admin Cabang ------------------------------
  {
    path: "/dashboard-cabang",
    element: <DashboardCabang />,
  },
  {
    path: "/pengaturan-cabang",
    element: <PengaturanCabang />,
  },
  {
    path: "/manage-user",
    element: <UserManager />,
  },
  {
    path: "/tambah-user",
    element: <TambahUser />,
  },
  {
    path: "/otorisasi-pengguna",
    element: <UserRole />,
  },
  // Gk Kepake
  // {
  //   path: "/otoritas-menu",
  //   element: <OtoritasMenu />,
  // },
  // User
  {
    path: "/pengaturan-user",
    element: <PengaturanUser />,
  },
  // Kelas
  {
    path: "/pengaturan-kelas",
    element: <PengaturanKelas />,
  },
  {
    path: "/pengaturan-kelas/buat-kelas",
    element: <BuatKelas />,
  },
  {
    path: "/pengaturan-program",
    element: <PengatuanProgram />,
  },
  // Soal
  {
    path: "/pengaturan-soal",
    element: <PengaturanSoal />,
  },
  {
    path: "/pengaturan-soal/buat-soal",
    element: <BuatSoal />,
  },
  // --------------------------------------------- End Admin Cabang ------------------------------
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
