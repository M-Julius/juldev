"use client";

import { Button } from "@/components/ui/button";
import { techStackMap } from "@/components/icon/icon";
import { motion } from "framer-motion";

const skills = {
  technical: [
    { name: "React Native", icon: "react native" },
    { name: "Expo", icon: "expo" },
    { name: "Flutter", icon: "flutter" },
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Express.js", icon: "expressjs" },
    { name: "Laravel", icon: "laravel" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Dart", icon: "dart" },
    { name: "PHP", icon: "php" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "MySQL", icon: "mysql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "UI/UX (Figma)", icon: "figma" },
    { name: "Redux", icon: "redux" },
    { name: "MobX", icon: "mobx" },
    { name: "Zustand", icon: "zustand" },
    { name: "Bloc", icon: "bloc" },
    { name: "Firebase", icon: "firebase" },
  ],
  soft: [
    "Strong analytical skills",
    "Effective problem-solving",
    "Quick adaptability",
    "Teamwork",
    "Time management"
  ],
  languages: [
    { language: "Indonesian", level: "Native" },
    { language: "English", level: "Basic" }
  ]
};

const experience = [
  {
    year: "Oct 2024 - Present",
    title: "Senior React Native Engineer",
    company: "ABNK (Singapore) Pte Ltd",
    description: ``
//     description: `• Led ABNK app development for iOS and Android using React Native
// • Implemented comprehensive unit testing and established CI/CD pipelines on CircleCI for testing, linting, and JavaScript security
// • Successfully developed product landing page using React.js and Tailwind CSS
// • Integrated animations with GSAP's ScrollTrigger and implemented gravity-based animations using Matter.js`,
  },
  {
    year: "Mar 2022 - Sep 2024",
    title: "Frontend Developer",
    company: "Rebelworks - Recurtech",
    description: `• Developed JoyBox e-commerce platform using React Native, Redux, Firebase, Branch.io, Moengage, and Sentry
• Built DBO Salesman App with features like loyalty points and achievement reports, revamped the app with new features and improved the UI/UX.
• Successfully launched DBO Salesman App on Play Store with 5,000+ downloads
• Optimized RSPI web app using Next.js and TypeScript, setup white label app for reducing setup time by 40%`,
  },
  {
    year: "Aug 2021 - Feb 2022",
    title: "Frontend Developer",
    company: "PT. Akar Inti Teknologi",
    description: `• Successfully developed eFOOD mobile app, achieving hundreds of thousands of downloads
• Implemented key features including nearby restaurant search and payment processing
• Utilized React Native Expo, MobX, TypeScript, Firebase, and Maps API
• Built VirtualMall BCA Finance web application using React.js and Redux, developed car loan calculations and selection features with data validation`,
  },
  {
    year: "Jul 2020 - Dec 2021",
    title: "Mobile App Developer",
    company: "PT. Musafir Cakra Persada",
    description: `• Developed Himpuh payment consolidation platform with bank transfers and e-wallet integration
• Created LarizManiz e-commerce app with product listings, shopping cart, and address management
• Built Himpuh Koperasi for Hajj/Umrah payments, implementing KYC and e-wallet features
• Developed WarungPos POS system using Flutter for local shop management,`,
  },
  {
    year: "Oct 2019 - Jun 2020",
    title: "Junior Mobile App Developer",
    company: "PT. Diginova Kreasi Indonesia",
    description: `• Built BikePitstop cycling community app with destination maps and event tracking
• Integrated real-time features using Socket.io and Maps API for location services
• Developed AmanahKu for zakat and qurban payments using React Native and Firebase
• Created ORION bank monitoring app with multi-role support and real-time reporting
• Implemented cash and ATM reporting features with Redux Sagas and FCM integration`,
  },
];

const education = [
  {
    year: "Aug 2021 - Present",
    title: "Bachelor of Computer Science",
    institution: "Universitas Dian Nusantara",
    description: `• Maintaining GPA 3.76 while focusing on software engineering and development
• Studying web development, UI/UX design, Android development, and cyber security
• Completed internship at Raya Houses as Fullstack Developer
• Developed property management web application using Laravel and React.js
• Successfully balancing weekend studies with full-time work commitments`,
  },
];

const certificates = [
  {
    name: "Meta React Native Specialization",
    issuer: "Meta",
    platform: "coursera.com",
    date: "Oct 10, 2023",
    link: "https://www.coursera.org/account/accomplishments/specialization/87TTTZLCF6QM",
    image: "https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png"
  },
  {
    name: "UI/UX Design Course",
    issuer: "Undira",
    platform: "undira.ac.id",
    date: "Jan 10, 2024",
    link: "https://res.cloudinary.com/dr4v4km4e/image/upload/f_auto,q_auto/v1/Portfolio/ybuptbcbsuzp4mqw8ayb",
    image: "https://reguler.undira.ac.id/assets/img/logo/favicon_undira.png"
  },
  {
    name: "Become Flutter Developer Expert",
    issuer: "Dicoding",
    platform: "dicoding.com",
    date: "Nov 24, 2021",
    link: "https://www.dicoding.com/certificates/MRZMKVOGRPYQ",
    image: "https://d17ivq9b7rppb3.cloudfront.net/original/academy/menjadi_flutter_developer_expert_logo_290421175717.jpg"
  },
  {
    name: "Learn Flutter Application Fundamentals",
    issuer: "Dicoding",
    platform: "dicoding.com",
    date: "Aug 16, 2021",
    link: "https://www.dicoding.com/certificates/ERZR4W51OZYV",
    image: "https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_fundamental_aplikasi_flutter_logo_230421132717.jpg"
  },
  {
    name: "Create Flutter Applications for Beginners",
    issuer: "Dicoding",
    platform: "dicoding.com",
    date: "Jun 5, 2021",
    link: "https://www.dicoding.com/certificates/53XEE8ER0XRN",
    image: "https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_membuat_aplikasi_flutter_untuk_pemula_logo_230421132656.jpg"
  },
  {
    name: "Getting Started with Dart Programming",
    issuer: "Dicoding",
    platform: "dicoding.com",
    date: "Sep 21, 2020",
    link: "https://www.dicoding.com/certificates/1OP8DY7KVPQK",
    image: "https://d17ivq9b7rppb3.cloudfront.net/original/academy/memulai_pemrograman_dengan_dart_logo_230421132631.jpg"
  },
  {
    name: "Basic JavaScript Programming",
    issuer: "Dicoding",
    platform: "dicoding.com",
    date: "Aug 21, 2023",
    link: "https://www.dicoding.com/certificates/98XWGMJ50PM3",
    image: "https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_dasar_pemrograman_javascript_logo_230421133231.jpg"
  },
  {
    name: "Learn Basic Structured Query Language (SQL)",
    issuer: "Dicoding",
    platform: "dicoding.com",
    date: "Aug 20, 2023",
    link: "https://www.dicoding.com/certificates/NVP7OR9JGPR0",
    image: "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:belajar_dasar_structured_query_language_sql_logo_050523100009.jpg"
  },
  {
    name: "Learn Basic Project Management",
    issuer: "Dicoding",
    platform: "dicoding.com",
    date: "Aug 18, 2023",
    link: "https://www.dicoding.com/certificates/81P23YO8YXOY",
    image: "https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:belajar_dasar_manajemen_proyek_logo_170223134601.png"
  },
  {
    name: "Basic Programming for Software Developers",
    issuer: "Dicoding",
    platform: "dicoding.com",
    date: "Aug 18, 2023",
    link: "https://www.dicoding.com/certificates/1RXY6838MZVM",
    image: "https://d17ivq9b7rppb3.cloudfront.net/original/academy/pengenalan_ke_dasar_pemrograman_basic_programming_101_logo_230421132319.jpg"
  },
  {
    name: "Getting Started with Kotlin Programming",
    issuer: "Dicoding",
    platform: "dicoding.com",
    date: "Jul 21, 2019",
    link: "https://www.dicoding.com/certificates/KEXL41DWMXG2",
    image: "https://d17ivq9b7rppb3.cloudfront.net/original/academy/memulai_pemrograman_dengan_kotlin_logo_230421132137.jpg"
  },
  {
    name: "Database Programming with SQL",
    issuer: "Oracle Academy",
    platform: "oracle.com",
    date: "Jan 7, 2023",
    link: "https://media.licdn.com/dms/document/media/D562DAQF9RDLcI4QjCg/profile-treasury-document-pdf-analyzed/0/1697356262990?e=1708560000&v=beta&t=ui0kbxU7S5udfrAIaACUOuEH_sS1RIV8gb-Ct-sLe1w",
    image: "https://www.latrobe.edu.au/news/announcements/2020/a-new-beginning-for-csit-and-the-oracle-academy/Oracle_Academy_rgb.png"
  },
  {
    name: "Java Foundations",
    issuer: "Oracle Academy",
    platform: "oracle.com",
    date: "Jan 10, 2023",
    link: "https://media.licdn.com/dms/document/media/D562DAQH5jj44uZx1-w/profile-treasury-document-pdf-analyzed/0/1697355989497?e=1708560000&v=beta&t=lD1_dDRl6Ub6ySIRwsEUIttSqkdKMajfOeIq1_TMuA8",
    image: "https://www.latrobe.edu.au/news/announcements/2020/a-new-beginning-for-csit-and-the-oracle-academy/Oracle_Academy_rgb.png"
  },
  {
    name: "React Basics",
    issuer: "Meta",
    platform: "coursera.com",
    date: "Oct 10, 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/UUQMAKXZWGNJ",
    image: "https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png"
  },
];

const CertificateItem = ({ cert, index }: { cert: typeof certificates[0], index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="border-b border-border py-2"
  >
    <div className="flex justify-between items-start gap-4">
      <div className="flex gap-4">
        <div className="w-12 h-12 flex-shrink-0">
          <img 
            src={cert.image} 
            alt={`${cert.name} logo`}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="space-y-1">
          <motion.a 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-medium hover:text-primary transition-colors block"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {cert.name}
          </motion.a>
          <div className="text-sm text-muted-foreground">{cert.issuer}</div>
          <div className="text-xs text-muted-foreground">{cert.platform}</div>
        </div>
      </div>
      <span className="text-sm text-primary whitespace-nowrap">{cert.date}</span>
    </div>
  </motion.div>
)

export default function Resume() {
  return (
    <main className="flex-1">
      <section className="min-h-screen py-20">
        <div className="container px-4 mt-10">
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4"
            >
              <div className="flex items-center justify-center space-x-4 text-4xl md:text-6xl">
                <span className="text-muted-foreground">{"{"}&quot;</span>
                <h1 className="text-primary font-bold">_resume</h1>
                <span className="text-muted-foreground">&quot;{"}"}</span>
              </div>
              <motion.div 
                className="pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button variant="default">Download CV</Button>
              </motion.div>
            </motion.div>

            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold"
                >
                  Experience
                </motion.h2>
                <div className="space-y-8">
                  {experience.map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative pl-6 border-l"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                        className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" 
                      />
                      <div className="space-y-2">
                        <span className="text-sm text-primary">{item.year}</span>
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.company}</p>
                        <div className="text-sm text-muted-foreground whitespace-pre-line">
                          {item.description}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-8">
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold mb-6"
                  >
                    Education
                  </motion.h2>
                  <div className="space-y-8">
                    {education.map((item, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-6 border-l"
                      >
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                          className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" 
                        />
                        <div className="space-y-2">
                          <span className="text-sm text-primary">{item.year}</span>
                          <h3 className="text-lg font-bold">{item.title}</h3>
                          <p className="text-muted-foreground">{item.institution}</p>
                          <div className="text-sm text-muted-foreground whitespace-pre-line">
                            {item.description}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <motion.h2 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold"
                >
                  Skills
                </motion.h2>
                
                <div className="space-y-4">
                  <div>
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="font-medium mb-2"
                    >
                      Technical Skills
                    </motion.h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.technical.map((skill, index) => (
                        <motion.span 
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className="bg-secondary px-3 py-1 rounded-full text-sm flex items-center gap-2"
                        >
                          {techStackMap[skill.icon]}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="font-medium mb-2"
                    >
                      Soft Skills
                    </motion.h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.soft.map((skill, index) => (
                        <motion.span 
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className="bg-secondary px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="font-medium mb-2"
                    >
                      Languages
                    </motion.h3>
                    <div className="space-y-2">
                      {skills.languages.map((lang, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                          className="flex justify-between items-center"
                        >
                          <span>{lang.language}</span>
                          <span className="text-primary text-sm">{lang.level}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <motion.h2 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold mb-6"
                  >
                    Certifications
                  </motion.h2>
                  <div className="space-y-4">
                    {certificates.map((cert, index) => (
                      <CertificateItem key={index} cert={cert} index={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
