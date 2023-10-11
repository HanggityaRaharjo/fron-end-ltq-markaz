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
import BiodataPeserta from "./pages/biodataPeserta";
import DaftarTahsinTahfidz from "./pages/pendaftaran/daftarTahsin/DaftarTahsinTahfidz";
import DaftarTalaqqi from "./pages/pendaftaran/daftarTalaqqi/DaftarTalaqqi";
import DaftarTahsinBiodata from "./pages/pendaftaran/daftarTahsin/DaftarTahsinBiodata";
import DaftarTahsinHari from "./pages/pendaftaran/daftarTahsin/DaftarTahsinHari";
import DaftarTalaqqiBiodata from "./pages/pendaftaran/daftarTalaqqi/DaftarTalaqqiBiodata";
import DaftarTalaqqiHari from "./pages/pendaftaran/daftarTalaqqi/DaftarTalaqqiHari";
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
import InputNilaiRapot from "./pages/guru/inputNilaiRapot";
import StockBarang from "./pages/tu/administrasi/spp/stockBarang";
import BiodataPegawai from "./pages/tu/pendaftaran/biodata";
import BiodataGuru from "./pages/guru/biodataGuru";
import FormCutiGuru from "./pages/guru/formCuti/indext";
import DataKonsumen from "./pages/tu/administrasi/spp/kasir/dataKonsumen";
import SppPesertaBaru from "./pages/tu/administrasi/spp/pembayaranSpp/pesertabaru/formPesertabaru";
import SppDaftarUlang from "./pages/tu/administrasi/spp/pembayaranSpp/daftarUlang/formDaftarUlang";
import WaBlash from "./pages/tu/administrasi/waBlash";
import PanitiaPsb from "./pages/tu/administrasi/panitiaPsb";
import Kurikulum from "./pages/guru/kurikulum";
import PresensiGuru from "./pages/guru/presensiGuru";
import TabelDaftarUlang from "./pages/tu/administrasi/spp/pembayaranSpp/daftarUlang";
import TabelPesertaBaru from "./pages/tu/administrasi/spp/pembayaranSpp/pesertabaru";
import Faktur from "./pages/tu/administrasi/spp/faktur";
import JumlahTagihan from "./pages/tu/administrasi/spp/faktur/jumlahTagihan";
import AlurKas from "./pages/bendahara/alurKas";
import FormAlurKas from "./pages/bendahara/alurKas/formAlurKas";
import DashboardTu from "./pages/tu/dashboard";
import DaftarUlangTu from "./pages/tu/pendaftaran/daftarUlang";
import InformasiRapot from "./pages/informasi/rapot";
import RiwayatPendidikan from "./pages/informasi/riwayatPendidikan";
import FormUbahBiodata from "./pages/biodataPeserta/formBiodata";
import BiayaPendidikan from "./pages/biayaPendidikan";
import TestLevel from "./pages/testLevel";
import UjianPraktek from "./pages/testLevel/ujianPraktek";
import KelasSiswa from "./pages/kelas";
import PengaturanAkun from "./pages/pengaturanAkun";
import GantiPassword from "./pages/pengaturanAkun/formGantiPassword";
import UbahBiodataPegawai from "./pages/tu/pendaftaran/biodata/ubahBiodata";
import UbahBiodataGuru from "./pages/guru/biodataGuru/ubahBiodata";
import NilaiRapot from "./pages/guru/inputNilaiRapot";
import FormCutiTu from "./pages/tu/pendaftaran/formCuti";
import PengaturanAkunTu from "./pages/tu/pendaftaran/pengaturanAkun/indec";
import FormPengaturanAkunTu from "./pages/tu/pendaftaran/pengaturanAkun/formPengaturanAkun";
import PengaturanAkunGuru from "./pages/guru/pengaturanAkun";
import FormPengaturanAkunGuru from "./pages/guru/pengaturanAkun/formPengaturanAkun";
import BarangMasuk from "./pages/tu/administrasi/spp/stockBarang/barangMasuk";
import BarangKeluar from "./pages/tu/administrasi/spp/stockBarang/barangKeluar";
import DashboardGuru from "./pages/guru/dashboard";
import DasbboarPeserta from "./pages/dashboardPesserta";
import Informasi from "./pages/Informasi";
import JadwalKelas from "./pages/jadwalKelas";
import Tugas from "./pages/tugas";
import DetailTugas from "./pages/tugas/detailTugas";
import SeleksiPeserta from "./pages/panitiaPSB/seleksiPeserta";


const router = createBrowserRouter([
  {
    path: "/informasi",
    element: <Informasi />,
  },
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
  {
    path: "/home",
    element: <Home />,
  },

  // peserta

  {
    path: "/show/dashboard-peserta",
    element: <DasbboarPeserta />,
  },
  {
    path: "/form/pengaturan-akun",
    element: <PengaturanAkun />,
  },
  {
    path: "/form/ganti-password",
    element: <GantiPassword />,
  },
  {
    path: "/show/biodata-peserta",
    element: <BiodataPeserta />,
  },
  {
    path: "/form/biodata-peserta",
    element: <FormUbahBiodata />,
  },
  {
    path: "/show/kelas",
    element: <KelasSiswa />,
  },
  {
    path: "/show/Tugas",
    element: <Tugas />,
  },
  {
    path: "/form/detail-tugas",
    element: <DetailTugas />,
  },
  {
    path: "/show/jadwalkelas",
    element: <JadwalKelas />,
  },
  {
    path: "/form/cuti",
    element: <FormCuti />,
  },
  {
    path: "/form/peserta-baru",
    element: <FormBiodataSiswa />,
  },
  {
    path: "form/pilih-program",
    element: <PilihProgram />,
  },
  {
    path: "/form/biaya-pendidikan",
    element: <BiayaPendidikan />,
  },
  {
    path: "/form/test-level",
    element: <TestLevel />,
  },
  {
    path: "/form/ujian-praktek",
    element: <UjianPraktek />,
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
  {
    path: "/show/informasi-rapot",
    element: <InformasiRapot />,
  },
  {
    path: "/show/riwayat-pendidikan",
    element: <RiwayatPendidikan />,
  },

  // Guru
  {
    path: "/show/dashboard-guru",
    element: <DashboardGuru />,
  },
  {
    path: "/form/pendaftaran-guru",
    element: <PendaftaranGuru />,
  },
  {
    path: "/show/biodata-guru",
    element: <BiodataGuru />,
  },
  {
    path: "/form/ubah-biodata-guru",
    element: <UbahBiodataGuru />,
  },
  {
    path: "/show/pengaturan-akun-guru",
    element: <PengaturanAkunGuru />,
  },
  {
    path: "/form/pengaturan-akun-guru",
    element: <FormPengaturanAkunGuru />,
  },
  {
    path: "/form/cuti-guru",
    element: <FormCutiGuru />,
  },
  {
    path: "/show/talaqi-A/nilai-siswa",
    element: <InputnilaiSiswa />,
  },
  {
    path: "/show/nilai-rapot",
    element: <NilaiRapot />,
  },
  {
    path: "/show/presensi-guru",
    element: <PresensiGuru />,
  },
  {
    path: "/show/presensi-kehadiran",
    element: <PresensiKehadiran />,
  },
  {
    path: "/show/kurikulum",
    element: <Kurikulum />,
  },

  // TU

  {
    path: "/show/dashboard-tu",
    element: <DashboardTu />,
  },
  {
    path: "/form/pendaftaran-tu",
    element: <DaftarUlangTu />,
  },
  {
    path: "/form/cuti-tu",
    element: <FormCutiTu />,
  },
  {
    path: "/show/biodata-pegawai",
    element: <BiodataPegawai />,
  },
  {
    path: "/form/ubah-biodata-pegawai",
    element: <UbahBiodataPegawai />,
  },
  {
    path: "/show/pengaturan-akun-tu",
    element: <PengaturanAkunTu />,
  },
  {
    path: "/form/pengaturan-akun-tu",
    element: <FormPengaturanAkunTu />,
  },
  {
    path: "/show/spp-peserta-baru",
    element: <TabelPesertaBaru />,
  },
  {
    path: "/form/spp-peserta-baru",
    element: <SppPesertaBaru />,
  },
  {
    path: "/form/spp-daftar-ulang",
    element: <SppDaftarUlang />,
  },
  {
    path: "/show/spp-daftar-ulang",
    element: <TabelDaftarUlang />,
  },
  {
    path: "/show/jumlah-tagihan",
    element: <JumlahTagihan />,
  },
  {
    path: "/show/stock-barang",
    element: <StockBarang />,
  },
  {
    path: "/show/barang-masuk",
    element: <BarangMasuk />,
  },
  {
    path: "/show/barang-keluar",
    element: <BarangKeluar />,
  },
  {
    path: "/show/konsumen",
    element: <DataKonsumen />,
  },
  {
    path: "/show/panitia-psb",
    element: <PanitiaPsb />,
  },
  {
    path: "/form/wa-blash",
    element: <WaBlash />,
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

  // Bendahara
  {
    path: "/show/alur-kas",
    element: <AlurKas />,
  },
  {
    path: "/form/alur-kas",
    element: <FormAlurKas />,
  },

  // Panitia PSB
  {
    path: "/show/seleksi-peserta",
    element: <SeleksiPeserta />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
