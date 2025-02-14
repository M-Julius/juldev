import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type ProjectType = 'web' | 'mobile' | 'design' | 'open source';

export const Category = {
  UI_UX_DESIGN: "UI/UX Design",
  MOBILE_DEVELOPMENT: "Mobile Development",
  OPEN_SOURCE: "Open Source",
} as const;

export interface Project {
  id: number;
  title: string;
  category: string[];
  images: string[];
  date: string;
  link: string;
  type: ProjectType;
  techStack: string[];
  description: string;
}

export const projects: Project[] = [
  {
    id: 13,
    title: "MovieApp-v2",
    category: [Category.OPEN_SOURCE, Category.MOBILE_DEVELOPMENT],
    images: [
      "https://raw.githubusercontent.com/M-Julius/Movie-App/main/screenshot/MovieApp.png",
    ],
    description:
      "Movie App is a mobile application that showcases a list of popular and top-rated movies, along with detailed movie information, favorite movies, cast details, and genres. Built using Expo and React Native, this app integrates various additional libraries for smooth animations and efficient data management.",
    date: "2024-08-31",
    link: "https://github.com/M-Julius/Movie-App",
    type: "mobile",
    techStack: ["react native", "expo", "typescript", "mobx"],
  },
  {
    id: 14,
    title: "Todo App - Clean Architecture",
    category: [Category.OPEN_SOURCE, Category.MOBILE_DEVELOPMENT],
    images: [
      "https://raw.githubusercontent.com/M-Julius/Todo-App/main/screenshoot/TodoApp.jpg",
    ],
    description: `Todo App is a simple task management application built using Expo React Native with a clean architecture implementation.`,
    date: "2024-08-31",
    link: "https://github.com/M-Julius/Todo-App",
    type: "mobile",
    techStack: ["react native", "expo"],
  },
  {
    id: 15,
    title: "Merchant ABNK",
    category: [Category.OPEN_SOURCE, Category.MOBILE_DEVELOPMENT],
    images: [
      "https://raw.githubusercontent.com/M-Julius/Merchant-Abnk/main/screenshoot/abnk.png",
    ],
    description:
      "Merchant Abnk is a mobile application that displays a list of merchants at abnk, with authentication by phone number, and verify by code otp.",
    date: "2024-09-05",
    link: "https://github.com/M-Julius/Merchant-Abnk",
    type: "mobile",
    techStack: ["react native", "typescript", "redux"],
  },
  {
    id: 16,
    title: "Listing Product App",
    category: [Category.OPEN_SOURCE, Category.MOBILE_DEVELOPMENT],
    images: [
      "https://res.cloudinary.com/dr4v4km4e/image/upload/v1739538615/product_listing_sn3jm8.png",
    ],
    description:
      "This is a simple e-commerce application built with React Native that allows users to view products, add them to their cart, and proceed to checkout.",
    date: "2024-09-01",
    link: "https://github.com/M-Julius/Product-Listing",
    type: "mobile",
    techStack: ["react native", "typescript", "redux"],
  },
  {
    id: 17,
    title: "Iqlix Ordering Ticket Movie",
    category: [Category.OPEN_SOURCE, Category.MOBILE_DEVELOPMENT],
    images: [
      "https://res.cloudinary.com/dr4v4km4e/image/upload/v1739552594/Banner_20_nrvcmp.png",
    ],
    description:
      "Iqlix Ordering Ticket Movie is a mobile application that allows users to order tickets for movies, but this only UI, not the full application.",
    date: "2024-09-01",
    link: "https://github.com/M-Julius/Iqlix-Movie",
    type: "mobile",
    techStack: ["react native", "typescript"],
  },
  {
    id: 1,
    title: "Edukring",
    category: [Category.UI_UX_DESIGN, Category.OPEN_SOURCE],
    images: [
      "https://res.cloudinary.com/dr4v4km4e/image/upload/f_auto,q_auto/v1/Portfolio/edukring",
    ],
    description:
      "EduKring is a mobile application specifically designed to help students in Indonesia manage their academic life more efficiently. This design was created as a UI/UX case study.",
    date: "2024-01-08",
    link: "https://www.figma.com/file/mOUL2s9rGqCjQacfvnzVjs/%5BEduKring%5D---Design-System%2C-Wireframe%2C-UI-Design?type=design&node-id=13-168&mode=design&t=9MzdWHLli6Bx1hxS-0",
    type: "design",
    techStack: ["figma"],
  },

  {
    id: 2,
    title: "DBO Salesman App",
    category: [Category.MOBILE_DEVELOPMENT],
    images: [
      "https://res.cloudinary.com/dr4v4km4e/image/upload/f_auto,q_auto/v1739537354/DBO%20Salesman.png",
    ],
    description:
      "DBO Salesman App is a mobile application designed as a tool for salesmen, aimed at measuring the sales force's activities on the DBO service.",
    date: "2022-05-10",
    link: "https://play.google.com/store/apps/details?id=com.dboapp",
    type: "mobile",
    techStack: [
      "javascript",
      "react native",
      "code push",
      "firebase",
      "moengage",
      "realm",
      "redux",
    ],
  },
  {
    id: 3,
    title: "Orion",
    category: [Category.MOBILE_DEVELOPMENT],
    images: [
      "https://res.cloudinary.com/dr4v4km4e/image/upload/c_scale,w_2591/v1670506628/Portfolio/Banner_f4edzt.png",
    ],
    description:
      "Orion (Operational Report Monitoring Online) is a mobile application for managing online reports. It includes various features such as cash funds, ATM funds, and more. Among these features, users can input data, approve/reject data, view data, download data, comment on data, and upload data. The application has nine different roles for each feature.",
    date: "2021-12-22",
    link: "",
    type: "mobile",
    techStack: ["react native", "javascript", "php", "laravel"],
  },
  {
    id: 4,
    title: "eFOOD by eDOT",
    category: [Category.MOBILE_DEVELOPMENT],
    images: [
      "https://res.cloudinary.com/dr4v4km4e/image/upload/c_scale,w_1618/v1670499670/Portfolio/eFood_iswo5g.png",
    ],
    description: `eFOOD by eDOT is a food delivery service platform that collaborates with various restaurants and merchants in your area, making it easier for you to enjoy culinary experiences without the need to queue. ${"\n"} Additionally, eFOOD offers a Pickup service, allowing you to collect your order yourself and choose your preferred pickup time.`,
    date: "2021-12-22",
    link: "https://play.google.com/store/apps/details?id=com.efood.customer",
    type: "mobile",
    techStack: [
      "react native",
      "typescript",
      "expo",
      "mobx",
      "mobx",
      "firebase",
      "google-maps",
    ],
  },
  {
    id: 5,
    title: "Presensi Basarnas",
    category: [Category.MOBILE_DEVELOPMENT],
    images: [
      "https://res.cloudinary.com/dr4v4km4e/image/upload/v1670501408/Portfolio/Basarnas_txdujk.png",
    ],
    description:
      "Presensi Online Basarnas is an application for attendance tracking. Its main features include recording routine duty attendance, standby attendance, SAR operation attendance, as well as leave or official duty attendance.",
    date: "2022-12-22",
    link: "https://apps.apple.com/us/app/presensi-online-basarnas/id1633001915?platform=iphone",
    type: "mobile",
    techStack: ["typescript", "mobx", "expo", "react native"],
  },
  {
    id: 6,
    title: "Warung POS",
    category: [Category.MOBILE_DEVELOPMENT],
    images: [
      "https://res.cloudinary.com/dr4v4km4e/image/upload/f_auto,q_auto/v1/Portfolio/Warung%20Pos",
    ],
    description:
      "Warung POS is a point-of-sale application for local shops, designed to help increase sales efficiency, track expenses, and manage payments effectively.",
    date: "2021-12-12",
    link: "",
    type: "mobile",
    techStack: ["flutter", "dart", "firebase", "bloc", "sqlite"],
  },
  {
    id: 7,
    title: "Lariz Maniz",
    category: [Category.MOBILE_DEVELOPMENT],
    images: [
      "https://res.cloudinary.com/dr4v4km4e/image/upload/c_scale,w_2359/v1644330771/Portfolio/LarizManiz_l2didf.jpg",
    ],
    description:
      "Lariz Manis is an application that makes it easier for vegetable sellers (vegetable agents) to become traders without the need to shop at the market.",
    date: "2020-11-22",
    link: "https://play.google.com/store/apps/details?id=com.larizmaniz",
    type: "mobile",
    techStack: ["javascript", "react native", "redux", "php", "laravel"],
  },
  {
    id: 8,
    title: "HaxorKit",
    category: [Category.MOBILE_DEVELOPMENT],
    images: [
      "https://res.cloudinary.com/dr4v4km4e/image/upload/v1644330761/Portfolio/HaxorKit_kbf46h.jpg",
    ],
    description: `HaxorKit is a powerful penetration testing tool designed to assist cybersecurity professionals in identifying vulnerabilities and securing systems. It provides a suite of features that enhance security assessments by automating various scanning and reconnaissance processes.\n\nKey Features:\n- Admin Finder – Detects admin login pages of websites.\n- Directory Scanner – Scans website directories and hidden files for potential vulnerabilities.\n- Nmap – Performs network scanning and reconnaissance to discover open ports and services.\n- Google Dork – Utilizes advanced search queries to find sensitive information indexed by search engines.\n- SQL Scanner – Detects potential SQL injection vulnerabilities in web applications.\n- Reverse IP Lookup – Identifies websites hosted on the same server.\n- Subdomain Scanner – Discovers subdomains associated with a target domain.\n- Email Spider – Extracts email addresses from websites for reconnaissance purposes.`,
    date: "2020-07-16",
    link: "https://play.google.com/store/apps/details?id=com.haxorkit",
    type: "mobile",
    techStack: ["javascript", "react native", "nodejs", "expressjs"],
  },
  {
    id: 9,
    title: "BikePitstop",
    category: [Category.MOBILE_DEVELOPMENT],
    images: [
      "https://res.cloudinary.com/dr4v4km4e/image/upload/c_scale,w_1829/v1644329635/Portfolio/BikePitstop_sqdsia.jpg",
    ],
    description: `BikePitstop is a cycling community application with various features. Users can find nearby parking spots, bicycle repair shops, hospitals, and police stations. It also includes a Panic Button feature, allowing users to request assistance from fellow cyclists within the area.`,
    date: "2020-07-16",
    link: "https://play.google.com/store/apps/details?id=com.bikepitstop",
    type: "mobile",
    techStack: [
      "javascript",
      "react native",
      "nodejs",
      "socket.io",
      "laravel",
      "php",
    ],
  },
  {
    id: 10,
    title: "Recipe Emak",
    category: [Category.MOBILE_DEVELOPMENT],
    images: [
      "https://res.cloudinary.com/dr4v4km4e/image/upload/c_scale,w_1499/v1644329693/Portfolio/ResepEmak_xywm3w.jpg",
    ],
    description: `Resep Emak is a cooking recipe application where users can create, search, comment on, and rate recipes. It provides a platform for sharing and discovering a variety of dishes, making cooking more interactive and enjoyable.`,
    date: "2020-04-16",
    link: "",
    type: "mobile",
    techStack: [
      "javascript",
      "react native",
      "nodejs",
      "firebase",
      "mongodb",
      "expressjs",
    ],
  },
  {
    id: 11,
    title: "Store Geming",
    category: [Category.MOBILE_DEVELOPMENT, Category.OPEN_SOURCE],
    images: [
      "https://res.cloudinary.com/dr4v4km4e/image/upload/v1644329666/Portfolio/StoreGeming_m0zx6b.jpg",
    ],
    description: `Store Geming is an open-source application built with Flutter, designed as a practice and learning resource for developing user interfaces in Flutter.`,
    date: "2021-06-07",
    link: "",
    type: "mobile",
    techStack: ["flutter", "dart"],
  },
  {
    id: 12,
    title: "Ditonton",
    category: [Category.OPEN_SOURCE, Category.MOBILE_DEVELOPMENT],
    images: [
      "https://res.cloudinary.com/dr4v4km4e/image/upload/c_scale,w_949/v1644329636/Portfolio/Ditonton1_e7uunj.png",
      "https://res.cloudinary.com/dr4v4km4e/image/upload/c_scale,w_966/v1644329653/Portfolio/Ditonton2_qxmhlm.png",
      "https://res.cloudinary.com/dr4v4km4e/image/upload/c_scale,w_949/v1644329635/Portfolio/Ditonton3_qggzjr.png",
    ],
    description: `Ditonton is an application for viewing movie and TV show information. It was developed using a starter project from Dicoding as the final submission for the "Becoming a Flutter Expert Developer" class on Dicoding.`,
    date: "2021-06-07",
    link: "",
    type: "mobile",
    techStack: ["flutter", "dart", "bloc", "firebase"],
  },
];