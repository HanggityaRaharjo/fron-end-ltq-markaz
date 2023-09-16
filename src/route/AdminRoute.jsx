import DashboardCabang from "../pages/adminCabang/dashboard";
import PembayaranPeserta from "../pages/adminCabang/pembayaran-peserta";
import PengaturanCabang from "../pages/adminCabang/pengaturanCabang";
import PengaturanKelas from "../pages/adminCabang/pengaturanKelas";
import BuatKelas from "../pages/adminCabang/pengaturanKelas/BuatKelas";
import PengatuanProgram from "../pages/adminCabang/pengaturanProgram";
import PengaturanSoal from "../pages/adminCabang/pengaturanSoal";
import BuatSoal from "../pages/adminCabang/pengaturanSoal/BuatSoal";
import EditSoal from "../pages/adminCabang/pengaturanSoal/EditSoal";
import PengaturanUser from "../pages/adminCabang/user";
import UserManager from "../pages/adminCabang/userManager";
import TambahUser from "../pages/adminCabang/userManager/tambahUser";
import UserRole from "../pages/adminCabang/userRole";

export const AdminRoute = [
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
    path: "/otoritas-pengguna",
    element: <UserRole />,
  },
  {
    path: "/pembayaran-peserta",
    element: <PembayaranPeserta />,
  },
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
  // Show Edit Soal
  {
    path: "/pengaturan-soal/:id",
    element: <EditSoal />,
  },
  {
    path: "/pengaturan-soal/buat-soal",
    element: <BuatSoal />,
  },
];
