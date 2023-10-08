import Kasir from "../pages/tatausaha/kasir";
import BarangDiBeli from "../pages/tatausaha/kasir/barang-di-beli";
import DataKonsumen from "../pages/tatausaha/kasir/data-konsumen";
import KasirPembayaran from "../pages/tatausaha/kasir/pembayaran";
import PembayaranSpp from "../pages/tatausaha/pembayaran/spp";

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
];
