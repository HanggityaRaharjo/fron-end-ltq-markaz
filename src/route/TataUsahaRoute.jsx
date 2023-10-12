import Kasir from "../pages/tatausaha/kasir";
import BarangDiBeli from "../pages/tatausaha/kasir/barang-di-beli";
import DataKonsumen from "../pages/tatausaha/kasir/data-konsumen";
import KasirPembayaran from "../pages/tatausaha/kasir/pembayaran";
import PembayaranSpp from "../pages/tatausaha/pembayaran/spp";
// Yang arul
import DashboardTu from "../pages/tu/dashboard";
import DaftarUlangTu from "../pages/tu/pendaftaran/daftarUlang";
import FormCutiTu from "../pages/tu/pendaftaran/formCuti";
import BiodataPegawai from "../pages/tu/pendaftaran/biodata";
import UbahBiodataPegawai from "../pages/tu/pendaftaran/biodata/ubahBiodata";
import PengaturanAkunTu from "../pages/tu/pendaftaran/pengaturanAkun";
import FormPengaturanAkunTu from "../pages/tu/pendaftaran/pengaturanAkun/formPengaturanAkun";
import SppPesertaBaru from "../pages/tu/administrasi/spp/pembayaranSpp/pesertabaru/formPesertabaru";
import SppDaftarUlang from "../pages/tu/administrasi/spp/pembayaranSpp/daftarUlang/formDaftarUlang";
import TabelDaftarUlang from "../pages/tu/administrasi/spp/pembayaranSpp/daftarUlang";
import JumlahTagihan from "../pages/tu/administrasi/spp/faktur/jumlahTagihan";
import StockBarang from "../pages/tu/administrasi/spp/stockBarang";
import BarangMasuk from "../pages/tu/administrasi/spp/stockBarang/barangMasuk";
import BarangKeluar from "../pages/tu/administrasi/spp/stockBarang/barangKeluar";
import WaBlash from "../pages/tu/administrasi/waBlash";
import PanitiaPsb from "../pages/tu/administrasi/panitiaPsb";

import DaftarSiswa from "../pages/tu/daftarPeserta";
import DetailSiswa from "../pages/tu/daftarPeserta/detailPeserta";

import TabelPesertaBaru from "../pages/tu/administrasi/spp/pembayaranSpp/pesertabaru";
import EFaktur from "../pages/tatausaha/e-faktur";
import LaporanKeuangan from "../pages/tatausaha/laporan-keuangan";

export const TataUsahaRoute = [
  {
    path: "/tata-usaha/kasir/data-konsumen",
    element: <DataKonsumen />,
  },
  {
    path: "/tata-usaha/kasir/barang-di-beli",
    element: <BarangDiBeli />,
  },
  {
    path: "/tata-usaha/kasir/pembayaran",
    element: <KasirPembayaran />,
  },
  {
    path: "/pembayaran/spp",
    element: <PembayaranSpp />,
  },
  {
    path: "/e-faktur",
    element: <EFaktur />,
  },
  {
    path: "/laporan-keuangan",
    element: <LaporanKeuangan />,
  },
  // Yang arul TU
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
    path: "/show/daftar-siswa",
    element: <DaftarSiswa />,
  },
  {
    path: "/show/detail-siswa",
    element: <DetailSiswa />,
  },
  {
    path: "/show/spp-peserta-baru",
    element: <TabelPesertaBaru />,
  },
  {
    path: "/form/spp-peserta-baru",
    element: "<SppPesertaBaru />",
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
    element: "Ini gk di pake",
  },
  {
    path: "/show/panitia-psb",
    element: <PanitiaPsb />,
  },
  {
    path: "/form/wa-blash",
    element: <WaBlash />,
  },
];
