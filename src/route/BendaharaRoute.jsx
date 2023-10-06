import AlurKas from "../pages/bendahara/alur-kas";
import DataTransaksi from "../pages/bendahara/data-transaksi";
import KategoriTransaksi from "../pages/bendahara/kategori-transaksi";
import LaporanTransaksi from "../pages/bendahara/laporan";
import RancanganAnggaranBiaya from "../pages/bendahara/rancangan-anggaran-biaya";
import CreateRancanganAnggaran from "../pages/bendahara/rancangan-anggaran-biaya/create-rab";

export const BendaharaRoute = [
  {
    path: "/alur-kas",
    element: <AlurKas />,
  },
  {
    path: "/transaksi/kategori",
    element: <KategoriTransaksi />,
  },
  {
    path: "/transaksi/data-transaksi",
    element: <DataTransaksi />,
  },
  {
    path: "/transaksi/laporan-transaksi",
    element: <LaporanTransaksi />,
  },
  {
    path: "/rancangan-anggaran-biaya",
    element: <RancanganAnggaranBiaya />,
  },
  {
    path: "/rancangan-anggaran-biaya/buat-anggaran",
    element: <CreateRancanganAnggaran />,
  },
];
