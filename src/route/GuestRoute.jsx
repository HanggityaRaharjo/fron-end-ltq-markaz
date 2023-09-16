import { LandingPage, TentangKami, Kontak, Faq } from "../pages/landing";
import {
  KajianTafsir,
  LTQMQI,
  MDMQI,
  MulazamahAkhwat,
  QSC,
  SantriNusantara,
  Mukhoyyam,
} from "../pages/landing/cabang";

export const GuestRoute = [
  {
    path: "/",
    element: <LandingPage />,
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
    path: "/ltq-mqi",
    element: <LTQMQI />,
  },
  {
    path: "/mdmqi",
    element: <MDMQI />,
  },
  {
    path: "/qsc",
    element: <QSC />,
  },
  {
    path: "/kajian-tafsir",
    element: <KajianTafsir />,
  },
  {
    path: "/mulazamah-akhwat",
    element: <MulazamahAkhwat />,
  },
  {
    path: "/santri-nusantara",
    element: <SantriNusantara />,
  },
  {
    path: "/mukhoyyam",
    element: <Mukhoyyam />,
  },
  {
    path: "/markaz-alquran-akhwat",
    element: <Mukhoyyam />,
  },
];
