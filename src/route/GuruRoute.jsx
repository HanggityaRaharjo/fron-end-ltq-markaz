import InputnilaiSiswa from "../pages/guru/inputNilai";
import PendaftaranGuru from "../pages/guru/pendaftaran";
import PresensiKehadiran from "../pages/guru/presensiKehadiran";

export const GuruRoute = [
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
];
