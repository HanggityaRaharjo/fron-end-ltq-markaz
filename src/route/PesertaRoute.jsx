import { Home } from "../pages";
import CountdownPembayaran from "../pages/countdownPambayaran";
import LevelPeserta from "../pages/levelPeserta";
import Pembayaran from "../pages/pembayaran";
import StatusPembayaran from "../pages/pembayaran/statusPembayaran";
import { FormBiodataSiswa } from "../pages/peserta";
import PilihProgram from "../pages/pilihProgramKelas";
import PlacementTest from "../pages/placement-test";
import PilihanGanda from "../pages/placement-test/pilihan-ganda";

export const PesertaRoute = [
  {
    path: "/home",
    element: <Home />,
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
    path: "/transfer-pembayaran/:uuid",
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
    path: "/placement-test",
    element: <PlacementTest />,
  },
  {
    path: "/placement-test/pilihan-ganda",
    element: <PilihanGanda />,
  },
];
