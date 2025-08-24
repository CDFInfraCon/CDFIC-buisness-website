"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Vmeproj1 from "../../../../public/ongoing/Vmeproj1.jpeg";
import Vmeproj2 from "../../../../public/ongoing/Vmeproj2.jpeg";
import Vmeproj3 from "../../../../public/ongoing/Vmeproj3.jpeg";
import Vmeproj4 from "../../../../public/ongoing/Vmeproj4.jpeg";
import ThinWhiteTopping1 from "../../../../public/ongoing/ThinWhiteTopping1.jpeg";
import ThinWhiteTopping2 from "../../../../public/ongoing/ThinWhiteTopping2.jpeg";
import ThinWhiteTopping3 from "../../../../public/ongoing/ThinWhiteTopping3.jpeg";
import ThinWhiteTopping4 from "../../../../public/ongoing/ThinWhiteTopping4.jpeg";
import Nagar1 from "../../../../public/ongoing/Nagar1.jpeg";
import Nagar2 from "../../../../public/ongoing/Nagar2.jpeg";
import Nagar3 from "../../../../public/ongoing/Nagar3.jpeg";
import KhedSinner1 from "../../../../public/ongoing/KhedSinner1.jpeg";
import KhedSinner2 from "../../../../public/ongoing/KhedSinner2.jpeg";
import Indapur1 from "../../../../public/ongoing/Indapur1.jpeg";
import Indapur2 from "../../../../public/ongoing/Indapur2.jpeg";
import DiveGhatMoholAlandi1 from "../../../../public/ongoing/DiveGhatMoholAlandi1.jpeg";
import DiveGhatMoholAlandi2 from "../../../../public/ongoing/DiveGhatMoholAlandi2.jpeg";
import PWDStatePunjab1 from "../../../../public/ongoing/PWDStatePunjab1.jpeg";
import KarnatakaGoaBorderNH4A1 from "../../../../public/ongoing/KarnatakaGoaBorderNH4A1.jpeg";
import KarnatakaGoaBorderNH4A2 from "../../../../public/ongoing/KarnatakaGoaBorderNH4A2.jpeg";
import AdilabadBelasectionNH353B1 from "../../../../public/ongoing/AdilabadBelasectionNH353B1.jpeg";
import TutjapurAusaSectionNH3611 from "../../../../public/ongoing/TutjapurAusaSectionNH3611.jpeg";
import UnitPMUMRRDA1 from "../../../../public/ongoing/UnitPMUMRRDA1.jpeg";
import UnitPMUMRRDA2 from "../../../../public/ongoing/UnitPMUMRRDA2.jpeg";
import CulvertsNH61Maharashtra1 from "../../../../public/ongoing/CulvertsNH61Maharashtra1.jpeg";
import CulvertsNH61Maharashtra2 from "../../../../public/ongoing/CulvertsNH61Maharashtra2.jpeg";
import DelhiSaharanpurHighwayAskshardham1 from "../../../../public/completed/DelhiSaharanpurHighwayAskshardham1.jpeg";
import DelhiSaharanpurHighwayAskshardham2 from "../../../../public/completed/DelhiSaharanpurHighwayAskshardham2.jpeg";
import DelhiSaharanpurHighwayAskshardham3 from "../../../../public/completed/DelhiSaharanpurHighwayAskshardham3.jpeg";
import DelhiSaharanpurHighwayAskshardham4 from "../../../../public/completed/DelhiSaharanpurHighwayAskshardham4.jpeg";



import Khed2 from "../../../../public/projects/Khed2.jpeg";
import Khed3 from "../../../../public/projects/Khed3.jpeg";
import BadneraRoadNagzariKharda from "../../../../public/completed/O1.jpg";
import GujaratMaharashtra from "../../../../public/completed/GujaratMaharashtra.jpg";
import KhedSinnarSectionofNH50 from "../../../../public/completed/Khed-SinnarSectionofNH-50.jpg";
import AmravatiChikhliSection from "../../../../public/completed/AmravatiChikhliSection.jpg";
import AmravatiChikhlisectionofNH6 from "../../../../public/completed/Amravati-ChikhlisectionofNH-6.jpg";
import PuneSolapurSectionofNH9 from "../../../../public/completed/PuneSolapurSectionofNH-9.jpg";
import TuIjapurShingoliYedshi from "../../../../public/completed/TuIjapurShingoli&Yedshi.jpg";
import PaudKolvanLonavalaRoad from "../../../../public/completed/PaudKolvanLonavalaRoad.jpg";
import PaudKolvanLonavalaRoad2 from "../../../../public/completed/PaudKolvanLonavalaRoad2.jpeg";
import MalharpethUmbrajMasurMayani1 from "../../../../public/completed/MalharpethUmbrajMasurMayani1.jpeg";
import MalharpethUmbrajMasurMayani2 from "../../../../public/completed/MalharpethUmbrajMasurMayani2.jpeg";
import MalharpethUmbrajMasurMayani3 from "../../../../public/completed/MalharpethUmbrajMasurMayani3.jpeg";
import MalharpethUmbrajMasurMayani4 from "../../../../public/completed/MalharpethUmbrajMasurMayani4.jpeg";
import MalharpethUmbrajMasurMayani5 from "../../../../public/completed/MalharpethUmbrajMasurMayani5.jpeg";
import PanshetLonavalaRajmachiTornaSinhgad51km1 from "../../../../public/completed/PanshetLonavalaRajmachiTornaSinhgad51km1.jpeg";
import PanshetLonavalaRajmachiTornaSinhgad51km2 from "../../../../public/completed/PanshetLonavalaRajmachiTornaSinhgad51km2.jpeg";
import PanshetLonavalaRajmachiTornaSinhgad51km3 from "../../../../public/completed/PanshetLonavalaRajmachiTornaSinhgad51km3.jpeg";
import PanshetLonavalaRajmachiTornaSinhgad51km4 from "../../../../public/completed/PanshetLonavalaRajmachiTornaSinhgad51km4.jpeg";
import PanshetLonavalaRajmachiTornaSinhgad51km5 from "../../../../public/completed/PanshetLonavalaRajmachiTornaSinhgad51km5.jpeg";
import PanshetLonavalaRajmachiTornaSinhgad51km6 from "../../../../public/completed/PanshetLonavalaRajmachiTornaSinhgad51km6.jpeg";
import HinjewadiChakanTalegaonRanjangaonJejuri58km1 from "../../../../public/completed/HinjewadiChakanTalegaonRanjangaonJejuri58km1.jpeg";
import HinjewadiChakanTalegaonRanjangaonJejuri58km2 from "../../../../public/completed/HinjewadiChakanTalegaonRanjangaonJejuri58km2.jpeg";
import HinjewadiChakanTalegaonRanjangaonJejuri58km3 from "../../../../public/completed/HinjewadiChakanTalegaonRanjangaonJejuri58km3.jpeg";
import HinjewadiChakanTalegaonRanjangaonJejuri58km4 from "../../../../public/completed/HinjewadiChakanTalegaonRanjangaonJejuri58km4.jpeg";
import MahabaleshwarSataraRahimatpur71km1 from "../../../../public/completed/MahabaleshwarSataraRahimatpur71km1.jpeg";
import MahabaleshwarSataraRahimatpur71km2 from "../../../../public/completed/MahabaleshwarSataraRahimatpur71km2.jpeg";
import MahabaleshwarSataraRahimatpur71km3 from "../../../../public/completed/MahabaleshwarSataraRahimatpur71km3.jpeg";
import MahabaleshwarSataraRahimatpur71km4 from "../../../../public/completed/MahabaleshwarSataraRahimatpur71km4.jpeg";
import MahabaleshwarSataraRahimatpur71km5 from "../../../../public/completed/MahabaleshwarSataraRahimatpur71km5.jpeg";
import NH707HimachalPradesh1 from "../../../../public/completed/NH707HimachalPradesh1.jpeg";

import NarayanaonBypassKhedSinner1 from "../../../../public/completed/NarayanaonBypassKhedSinner1.jpeg";
import NarayanaonBypassKhedSinner2 from "../../../../public/completed/NarayanaonBypassKhedSinner2.jpeg";
import NarayanaonBypassKhedSinner3 from "../../../../public/completed/NarayanaonBypassKhedSinner3.jpeg";
import NarayanaonBypassKhedSinner4 from "../../../../public/completed/NarayanaonBypassKhedSinner4.jpeg";
import NarayanaonBypassKhedSinner5 from "../../../../public/completed/NarayanaonBypassKhedSinner5.jpeg";
import NarayanaonBypassKhedSinner6 from "../../../../public/completed/NarayanaonBypassKhedSinner6.jpeg";
import NarayanaonBypassKhedSinner7 from "../../../../public/completed/NarayanaonBypassKhedSinner7.jpeg";
import VadodraMumbai103_1281 from "../../../../public/completed/VadodraMumbai103_1281.png";
import VadodraMumbai103_1282 from "../../../../public/completed/VadodraMumbai103_1282.jpeg";
import VadodraMumbai103_1283 from "../../../../public/completed/VadodraMumbai103_1283.jpeg";
import VadodraMumbai103_1284 from "../../../../public/completed/VadodraMumbai103_1284.png";
import Vme128_1541 from "../../../../public/completed/Vme128_1541.jpeg";
import Vme128_1542 from "../../../../public/completed/Vme128_1542.jpeg";
import Vme128_1543 from "../../../../public/completed/Vme128_1543.png";
import Vme128_1544 from "../../../../public/completed/Vme128_1544.png";
import Vme154_1901 from "../../../../public/completed/Vme154_1901.jpeg";
import Vme154_1904 from "../../../../public/completed/Vme154_1904.png";
import Vme154_1905 from "../../../../public/completed/Vme154_1905.png";
import Vme154_1906 from "../../../../public/completed/Vme154_1906.png";
import Vme154_1907 from "../../../../public/completed/Vme154_1907.png";
import NationalHighwaysUttarPradesh1 from "../../../../public/completed/NationalHighwaysUttarPradesh1.jpeg";
import NH50NH60KalambBypass1 from "../../../../public/completed/NH50NH60KalambBypass1.jpeg";
import NH52NewNH15Assam1 from "../../../../public/completed/NH52NewNH15Assam1.jpeg";
import NH347BG753LMP1 from "../../../../public/completed/NH347BG753LMP1.jpeg";
import NH65MaharashtraEPC1 from "../../../../public/completed/NH65MaharashtraEPC1.jpeg";

const OurProjects = [
  {
    id: 1,
    status: "Completed",
    name: "Package 9 (NH-53 Badnera Road-Nagzari Kharda Road section from Belora Kherda Karanja Mangrulpir SH 280 and SH 274 and Murtizapur to Kherda SH 282 excluding Badnera Nagzari) for up gradation to Two Lane paved shoulder/ Four Lane configuration in the state of Maharashtra",
    length: "16.55 KM",
    client: "EPC Contractor Pentacle Consultant (I) Pvt Ltd.",
    category: "DPR",
    images: [BadneraRoadNagzariKharda],
  },
  {
    id: 2,
    status: "Completed",
    name: "Four laning of Fagne to Gujarat-Maharashtra Border section of NH 6 from Km 510 to Km 650.79 in Maharashtra under NHDP Phase IV.",
    length: "141.59 km.",
    client: "GHV (India) Pvt Ltd",
    category: "Design",
    images: [GujaratMaharashtra],
  },
  {
    id: 3,
    status: "Completed",
    name: "Four Laning of Khed-Sinnar Section of NH-50 from Km 42+000 to Km 177+000 (Design Length - 137.946 Km) under NHDP Phase IV in the state of Maharashtra on DBFOT Basis",
    length: "137.94 km.",
    client: "IL&FS Transportation Network Limited",
    category: "Design",
    images: [KhedSinnarSectionofNH50],
  },
  {
    id: 4,
    status: "Completed",
    name: "Four Laning of Amravati- Chikhli section of NH-6 [Package-1 from km 166.000 (Amravati) to km 220.000 (Near Kurankhed)] in the state of Maharashtra",
    length: "54 km.",
    client: "Skylark",
    category: "Design",
    images: [AmravatiChikhliSection],
  },
  {
    id: 5,
    status: "Completed",
    name: "Amravati- Chikhli section of NH-6 [Package-II from km 220.000 (Near Kurankhed) to km 270.000 (Near Shelad)] in the state of Maharashtra",
    length: "40 km.",
    client: "BCCPIL",
    category: "Design",
    images: [AmravatiChikhlisectionofNH6],
  },
  {
    id: 6,
    status: "Completed",
    name: "Widening of existing road from Km 144.400 to Km 249.000 on the Pune Solapur Section of NH-9.",
    length: "105 km.",
    client: "IL&FS Transportation Network Limited",
    category: "Design",
    images: [PuneSolapurSectionofNH9],
  },
  {
    id: 7,
    status: "Completed",
    name: "Development of existing roads where bypasses are provided, in towns/village (Ule, Suratgaon, Malumbra, TuIjapur, Shingoli & Yedshi) On NH-211 (New-NH-52) & Naldurg,Omarga on NH-09 ,(New NH-65) In the State of Maharashtra on EPC Mode",
    length: "5 km.",
    client: "M/s Anant Chaitanya Consultancy Services",
    category: "Design",
    images: [TuIjapurShingoliYedshi],
  },
  {
    id: 8,
    status: "Completed",
    name: "Improvement to Paud Kolvan Lonavala Road, MDR 26, Km 16/400 to 41/300, Tal. Maval, Dist. Pune, and associated roads",
    length: "71.16 km.",
    client: "Roadway Solution India Infra Limited",
    category: "PMC",
    images: [PaudKolvanLonavalaRoad, PaudKolvanLonavalaRoad2],
  },
  {
    id: 9,
    status: "Completed",
    name: "Improvements to Malharpeth- Umbraj- Masur- Mayani - Diganchi -Mahud Pandharpur Road S.H.143 (Km 55/000 to 153/420) in the state of Maharashtra under MRIP on Hybrid Annuity Mode",
    length: "46.08 km.",
    client: "Roadway Solution India Infra Limited",
    category: "PMC",
    images: [
      MalharpethUmbrajMasurMayani1,
      MalharpethUmbrajMasurMayani2,
      MalharpethUmbrajMasurMayani3,
      MalharpethUmbrajMasurMayani4,
      MalharpethUmbrajMasurMayani5,
    ],
  },
  {
    id: 10,
    status: "Completed",
    name: "Improvement of roads connecting the tourist destination in Pune District (Panshet, Lonavala, Rajmachi. Torna, Sinhgad, Purandar)",
    length: "51.18 km.",
    client: "Roadway Solution India Infra Limited",
    category: "PMC",
    images: [
      PanshetLonavalaRajmachiTornaSinhgad51km1,
      PanshetLonavalaRajmachiTornaSinhgad51km2,
      PanshetLonavalaRajmachiTornaSinhgad51km3,
      PanshetLonavalaRajmachiTornaSinhgad51km4,
      PanshetLonavalaRajmachiTornaSinhgad51km5,
      PanshetLonavalaRajmachiTornaSinhgad51km6,
    ],
  },
  {
    id: 11,
    status: "Completed",
    name: "Improvements to Roads in Industrial Sector in Pune District (Hinjewadi, Chakan, Talegaon, Ranjangaon, Jejuri)",
    length: "58.36 km.",
    client: "Roadway Solution India Infra Limited",
    category: "PMC",
    images: [
      HinjewadiChakanTalegaonRanjangaonJejuri58km1,
      HinjewadiChakanTalegaonRanjangaonJejuri58km2,
      HinjewadiChakanTalegaonRanjangaonJejuri58km3,
      HinjewadiChakanTalegaonRanjangaonJejuri58km4,
    ],
  },
  {
    id: 12,
    status: "Completed",
    name: "Improvements to Mahabaleshwar Satara Rahimatpur Pusesawali Vita Road, SH - 140 in the state of Maharashtra under MRIP on Hybrid Annuity Mode.",
    length: "71.78 km.",
    client: "Roadway Solution India Infra Limited",
    category: "PMC",
    images: [
      MahabaleshwarSataraRahimatpur71km1,
      MahabaleshwarSataraRahimatpur71km2,
      MahabaleshwarSataraRahimatpur71km3,
      MahabaleshwarSataraRahimatpur71km4,
      MahabaleshwarSataraRahimatpur71km5,
    ],
  },
  {
    id: 13,
    status: "Completed",
    name: "Consultancy Services for Feasibility study and preparation of Detail Project Report (DPR) for improvement and up-gradation of newly declared National Highways in the State of Uttar Pradesh.",
    length: "60 km.",
    client: "NHAI",
    category: "DPR",
    images: [NationalHighwaysUttarPradesh1],
  },
  {
    id: 14,
    status: "Completed",
    name: "Construction of Eight lane access-controlled Expressway from Km 103.400 to Km 128.000 of Vadodara Mumbai Expressway in the State of Gujarat, UT of DNH and Maharashtra on Hybrid Annuity Mode under Bharatmala Pariyojana.",
    length: "24.60 km.",
    client: "Roadway Solution India Infra Limited",
    category: "PMC",
    images: [
      VadodraMumbai103_1281,
      VadodraMumbai103_1282,
      VadodraMumbai103_1283,
      VadodraMumbai103_1284,
    ],
  },
  {
    id: 15,
    status: "Completed",
    name: "Construction of Eight lane access-controlled Expressway from km 128.000 to km 154.600 of Vadodara Mumbai Expressway in the state of Gujarat on Hybrid Annuity mode under Bharatmala Pariyojna.",
    length: "26.60 km.",
    client: "Roadway Solution India Infra Limited",
    category: "PMC",
    images: [Vme128_1541, Vme128_1542, Vme128_1543, Vme128_1544],
  },
  {
    id: 16,
    status: "Completed",
    name: "Construction of Eight lane access-controlled Expressway from Km 154.600 to Km 190.000 of Vadodara Mumbai Expressway in the State of Gujarat on Hybrid Annuity Mode under Bharatmala Pariyojana.",
    length: "35.400 km.",
    client: "Roadway Solution India Infra Limited",
    category: "PMC",
    images: [Vme154_1901, Vme154_1904, Vme154_1905, Vme154_1906, Vme154_1907],
  },
  {
    id: 17,
    status: "Completed",
    name: "Balance Work under Phase -II for 4 laning of Khed Sinner Section of NH-50 (New NH-60) Comprising of the Stretches of Kalamb Bypass, Bhatkalwadi, and Alephata bypass in the State of Maharashtra.",
    length: "8.634 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [NH50NH60KalambBypass1],
  },
  {
    id: 18,
    status: "Completed",
    name: "Balance work of Khed Ghat Realignment and Narayangaon Bypass on Khed - Sinnar section of NH - 60 in the State of Maharashtra on EPC Mode.",
    length: "9.319 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [
      NarayanaonBypassKhedSinner1,
      NarayanaonBypassKhedSinner2,
      NarayanaonBypassKhedSinner3,
      NarayanaonBypassKhedSinner4,
      NarayanaonBypassKhedSinner5,
      NarayanaonBypassKhedSinner6,
      NarayanaonBypassKhedSinner7,
    ],
  },
  {
    id: 19,
    status: "Completed",
    name: "Four Laning of NH-52 (New-NH 15) from end of Biswanath Chariali by-pass to Gohpur in the state of Assam on EPC mode.",
    length: "57.50 km.",
    client: "NHIDCL",
    category: "Safety Consultant",
    images: [NH52NewNH15Assam1],
  },
  {
    id: 20,
    status: "Completed",
    name: "4-lanning of Balwara to Dhangaon section of NH-347BG & 753L in the State of Madhya Pradesh under Bharatmala Pariyojana Phase-I.",
    length: "40.40 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [NH347BG753LMP1],
  },
  {
    id: 21,
    status: "Ongoing",
    name: "Consultancy Services for Authority’s Engineer for Supervision of Construction of Four-Laning of NH 965G from Baramati to Tondale via Indapur in the State of Maharashtra under Bharatmala Pariyojna on EPC Mode (Total Length: 89.831 km)",
    length: "42.131 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [Indapur1,Indapur2],
  },
  {
    id: 24,
    status: "Completed",
    name: "Rehabilitation and Upgradation to Intermediate Lane configuration of Shri Kyari - Gumma section of NH-707 in the State of Himachal Pradesh under Green National Highways Corridor project (GNHCP) with the loan assistance of World Bank on EPC mode.",
    length: "19.900 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [NH707HimachalPradesh1],
  },
  {
    id: 25,
    status: "Ongoing",
    name: "Independent Engineer services for Supervision of Construction of 8 lane access-controlled Expressway from Amne to Bhoj Section-SPUR of Vadodara Mumbai Expressway in the State of Maharashtra on Hybrid Annuity mode under Bharatmala Pariyojana.",
    length: "24.6 km.",
    client: "NHAI",
    category: "Authority Engineer/ Independent Engineer",
    images: [Vmeproj1, Vmeproj2, Vmeproj3, Vmeproj4],
  },
  {
    id: 26,
    status: "Ongoing",
    name: "Four Lanning of existing 2/4 lane stretch from Lonand to Dive Ghat of Mohol – Alandi section of NH – 965 in the state of Maharashtra to be executed on EPC Mode under Bharatmala Pariyojana.",
    length: "54.500 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [DiveGhatMoholAlandi1,DiveGhatMoholAlandi2],
  },
  {
    id: 27,
    status: "Ongoing",
    name: "Consultancy Services of Road Safety Audit and black spot rectification on NHs with PWD in the state of Punjab.",
    length: "500 km.",
    client: "MoRTH",
    category: "Safety Consultant",
    images: [PWDStatePunjab1],
  },
  {
    id: 28,
    status: "Ongoing",
    name: "Consultancy Services of Supervision Consultant during O&M phase from Malshej Ghat to Ane Ghat on NH-61 in the state of Maharashtra.",
    length: "167.700 km.",
    client: "NHAI",
    category: "Supervision Consultant Operation & Maintenance",
    images: [Nagar1, Nagar2, Nagar3],
  },
  {
    id: 29,
    status: "Ongoing",
    name: "Consultancy Services for Supervision Consultant for 4/6L of Khed to Sinnar of NH - 60 in the State of Maharashtra.",
    length: "131.900 km.",
    client: "NHAI",
    category: "Supervision Consultant Operation & Maintenance",
    images: [Khed2, Khed3, KhedSinner1, KhedSinner2],
  },
  {
    id: 30,
    status: "Completed",
    name: "Detailed Project Report of additional Service Road / Slip Road in the stretch of Pune-Solapur section NH-65 in the State of Maharashtra as Standalone project on EPC Mode.",
    length: "16.645 km.",
    client: "NHAI",
    category: "DPR",
    images: [NH65MaharashtraEPC1],
  },
  {
    id: 31,
    status: "Ongoing",
    name: "Road Safety Audit of construction of 2-lanning with paved shoulder from Karnataka/Goa Border on NH-4A in the state of Karnataka on EPC Mode.",
    length: "84.120 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [KarnatakaGoaBorderNH4A1,KarnatakaGoaBorderNH4A2],
  },
  {
    id: 32,
    status: "Ongoing",
    name: "Widening to 2-lane with paved shoulder of Adilabad-Bela section of NH353B in the state of Telangana under annual plan 2021-22 on EPC mode under NH(O).",
    length: "32.970 km.",
    client: "PWD Telangana – NH Division",
    category: "Safety Consultant",
    images: [AdilabadBelasectionNH353B1],
  },
  {
    id: 33,
    status: "Ongoing",
    name: "Construction of balance works (VUP, service Road, Drain, Junction Devetopment, Bus-Bay and FOB) for four laning of Tutjapur-Ausa section of NH-361 under Bharatmata Pariyojna in the State of Maharashtra on EPC Mode.",
    length: "55.835 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [TutjapurAusaSectionNH3611],
  },
  {
    id: 34,
    status: "Ongoing",
    name: "Project Management Unit (PMU) at MRRDA for roads to be taken up for construction/up-gradation with Full Depth Reclamation Technology in Maharashtra.",
    length: "250 km.",
    client: "PMGSY",
    category: "DPR",
    images: [UnitPMUMRRDA1,UnitPMUMRRDA2],
  },
  {
    id: 35,
    status: "Ongoing",
    name: "Authority Engineer of White topping (TWT) along with reconstruction of 20 nos. culverts for NH-61 in the State of Maharashtra.",
    length: "167.700 km.",
    client: "NHAI",
    category: "Authority Engineer/ Independent Engineer",
    images: [CulvertsNH61Maharashtra1,CulvertsNH61Maharashtra2],
  },
  {
    id: 36,
    status: "Ongoing",
    name: "Authority Engineer of design and construction of using Thin White topping (TWT) including routine maintenance & balance work of Khed – Sinnar section of NH-60 in the State of Maharashtra as Standalone project on EPC Mode.",
    length: "131.900 km.",
    client: "NHAI",
    category: "Authority Engineer/ Independent Engineer",
    images: [
      ThinWhiteTopping1,
      ThinWhiteTopping2,
      ThinWhiteTopping3,
      ThinWhiteTopping4,
    ],
  },
  {
    id: 37,
    status: "Ongoing",
    name: "Appointment of Safety consultant for NH-709B, Pkg-I: Six lane access controlled in Delhi portion of Delhi Saharanpur Highway from Askshardham to Delhi/UP border (Ch. 0+00 to Ch. 14+750) in the State of Delhi on EPC Mode under economic corridor in phase-Iof Bharatmala Pariyojana (Length: 14.74 km.)and NH-709B, Pkg-II: Six lane access controlled in Uttar Pradesh portion of Delhi Saharanpur Highway from Delhi/UPBorder to EPC Junction (Ch. 14.750 to Ch. 31.600) in the State of Uttar Pradesh on EPC mode under Economic Corridor in Phase-I of Bharatmala Pariyojana (length: 16.85 km.) and Improvement & upgradation of Muzaffarnagar – Miranpur section of NH-709AD from km. 97.450 to km. 123.450 on EPC mode under NH(O) in the State of Uttar Pradesh (Pkg-III) (Length 26 km.) and Four lane Spur of Shamli-Muzaffarnagar connection NH-709AD (Panipat-Shamli-Muzaffarnagar) and NH-58 (Meerut – Roorkee) bypassing Muzaffarnagar Town from Ch. 0+000 to Ch. 10+157 (Length 10.157 km.).",
    length: "10.157 km",
    client: "NHAI",
    category: "Authority Engineer/ Independent Engineer",
    images: [
      DelhiSaharanpurHighwayAskshardham1,
      DelhiSaharanpurHighwayAskshardham2,
      DelhiSaharanpurHighwayAskshardham3,
      DelhiSaharanpurHighwayAskshardham4,
    ],
  }
];

const ProjectTabs = ({}) => {
  const categories = [
    "All",
    "DPR",
    "Design",
    "PMC",
    "Safety Consultant",
    "Supervision Consultant Operation & Maintenance",
    "Authority Engineer/ Independent Engineer",
  ];
  const [statusFilter, setStatusFilter] = useState("Completed");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const filteredProjects = OurProjects.filter((project) => {
    return (
      project.status === statusFilter &&
      (categoryFilter === "All" || project.category === categoryFilter)
    );
  });

  const ProjectCard = ({ project, index }) => (
    <motion.div
      key={index}
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 },
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-[300px] w-full">
        {project.images && project.images.length > 0 ? (
          project.images.length > 1 ? (
            <div className="h-[300px]">
              <Slider {...sliderSettings}>
                {project.images.map((image, i) => (
                  <div key={i} className="relative h-[300px]">
                    <Image
                      src={image}
                      alt={`${project.name} - Image ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <Image
              src={project.images[0]}
              alt={project.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )
        ) : (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-medium mb-2">{project.name}</h3>
        <p className="text-sm text-gray-600 mt-auto">
          Length: {project.length}
        </p>
      </div>
    </motion.div>
  );

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        {/* Status Tabs */}
        <div className="flex gap-4">
          {["Completed", "Ongoing"].map((status) => (
            <button
              key={status}
              className={`px-4 py-2 font-bold rounded-md transition duration-300 text-xl
                ${
                  statusFilter === status
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-gray-300 text-gray-700 hover:bg-orange-400"
                }`}
              onClick={() => setStatusFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Category Dropdown */}
        <div className="relative">
          <motion.button
            className="w-40 px-4 py-2 bg-orange-500 text-white rounded-lg text-xl
                     text-left font-semibold flex justify-between items-center"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {categoryFilter}
            {isDropdownOpen ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </motion.button>
          {/*  */}

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                className="absolute right-0 w-52 mt-2 bg-white border rounded-lg 
                         shadow-lg overflow-hidden z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    className="w-full px-4 py-2 text-left hover:bg-orange-50  text-xl
                             transition-colors text-gray-800"
                    onClick={() => {
                      setCategoryFilter(category);
                      setIsDropdownOpen(false);
                    }}
                    whileHover={{ x: 10 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id || index}
            project={project}
            index={index}
          />
        ))}
      </div>

      <style jsx global>{`
        .slick-slider {
          height: 300px;
        }
        .slick-list,
        .slick-track {
          height: 100%;
        }
        .slick-slide {
          height: 300px;
        }
        .slick-slide > div {
          height: 100%;
        }
        .slick-dots {
          bottom: 10px;
          z-index: 10;
        }
        .slick-dots li button:before {
          color: white;
          opacity: 0.7;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ProjectTabs;
