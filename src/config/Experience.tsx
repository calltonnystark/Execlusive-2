import TypeScript from '@/components/technologies/TypeScript';
// import Docekr from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
  certificate?: {
    file: string;
    title: string;
  } | {
    file: string;
    title: string;
  }[];
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    isBlur: false,
    company: 'Digitt+',
    position: 'Information Security Intern',
    location: 'Lahore,Pakistan (Onside)',
    image: '/company/digitt.png',
    description: [
      'Supported GRC activities by assisting with security documentation, compliance requirements, risk assessment, and alignment with established security frameworks and standards.',
  'Gained practical exposure to SOC operations, including security monitoring, log analysis, alert investigation, and understanding how security incidents are identified, assessed, and escalated.',
  'Assisted with security assessments and vulnerability identification using industry-standard security tools, developing practical knowledge of network, web application, and infrastructure security.',
  '<b>Gained hands-on exposure to Red Teaming and offensive security practices, including reconnaissance, vulnerability assessment, and security testing in controlled environments.</b>',
  'Worked across GRC, SOC, and offensive security functions, developing a broader understanding of how governance, risk, compliance, security operations, and security testing work together in a fintech environment.',
    ],
    startDate: 'August 2025',
    endDate: 'September 2026',
    technologies: [
      {
        name: 'Wazuh',
        href: 'https://wazuh.com/',
        icon: < TypeScript />,
      },
  
      {
        name: 'Microsoft Defender',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'The Hive Project',
        href: 'https://strangebee.com/thehive/',
        icon: <TypeScript />,
      },
      {
        name: 'Burp Suite Professional',
        href: 'https://portswigger.net/burp/pro',
        icon: <TypeScript />,
      },
      {
        name: 'Nmap',
        href: 'https://nmap.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Metaspolit Framework',
        href: 'https://www.metasploit.com/',
        icon: <TypeScript />,
      },
      {
        name: 'Gobuster',
        href: 'https://www.kali.org/tools/gobuster/',
        icon: <TypeScript />,
      },
      {
        name: 'Nikto',
        href: 'https://www.kali.org/tools/nikto/',
        icon: <TypeScript />,
      },
      // {
      //   name: 'Postman',
      //   href: 'https://www.postman.com/',
      //   icon: <Postman />,
      // },
      {
        name: 'kali_Linux ',
        href: 'https://www.kali.org/get-kali/#kali-platforms',
        icon: <TypeScript />,
      },
      {
        name: 'SQL_MAP',
        href: 'https://www.kali.org/tools/sqlmap/',
        icon: <TypeScript />,
      },
      {
        name: 'ISO 27001 ',
        href: 'https://www.iso.org/standard/27001',
        icon: <TypeScript />,
      }, 
      {
        name: 'OWASP TOP 10',
        href: 'https://owasp.org/www-project-top-ten/',
        icon: <TypeScript />,
      },
      {
        name: 'Huawei Cloud Security',
        href: 'https://www.huaweicloud.com/intl/en-us/securecenter/security.html',
        icon: <TypeScript />,
      },
      {
        name: 'Guard Duty (AWS)',
        href: 'https://aws.amazon.com/guardduty/',
        icon: <TypeScript />,
      },
      {
        name: 'Bash Commands',
        href: 'https://tryhackme.com/room/bashscripting',
        icon: <TypeScript />,
      }, 
      {
        name: 'Docker',
        href: 'https://www.docker.com/',
        icon: <TypeScript />,
      },
      {
        name: 'MITRA-ATTACK',
        href: 'https://attack.mitre.org/',
        icon: <TypeScript />,
      },
    ],
    website: 'https://digitt.com.pk/',
    facebook: 'https://www.facebook.com/digittplus',
    linkedin: 'https://www.linkedin.com/company/digittplus/',
    certificate: {
      file: '/certificates/aft-certificate.jpeg',
      title: 'Information Security Intern',
    },
    // github: '#', 
    // x: '#',
  },
  {
    isCurrent: false,
    company: 'ITSOLERA PVT LTD',
    position: 'Offensive Security Intern',
    location: 'Islamabad, Pakistan (Remote)',
    image: '/company/itsolera.png',
    description: [
       'Participated in adversary simulation exercises designed to understand real-world attack techniques and evaluate the effectiveness of existing security defenses.',
  'Gained hands-on experience in network and web application penetration testing, using Nmap, Nessus, OpenVAS, and Metasploit to identify and assess security vulnerabilities.',
  'Supported controlled phishing simulations, privilege escalation, and lateral movement exercises to understand how attackers move through compromised environments.',
  'Analyzed Windows and Linux system logs to investigate security events and identify potential security gaps and weaknesses.',
  'Assisted in preparing security assessment reports by documenting findings and providing practical recommendations to improve the organization’s overall security posture.',
  'Developed practical understanding of offensive security workflows, attack methodologies, and Red Team–Blue Team operations through hands-on security testing and simulation exercises.',
    ],
    startDate: 'January 2026',
    endDate: 'March 2026',
    technologies: [
      {
        name: 'Web Application Penetration Testing',
        href: '',
        icon: <TypeScript />,
      },
      {
        name: 'Vulnerability Assessment',
        href: ' ',
        icon: <TypeScript />,
      },
      {
        name: 'Phishing Simulation',
        href: '',
        icon: <TypeScript />,
      },
      {
        name: 'Privilege Escalation',
        href: '',
        icon: <TypeScript />,
      },
      {
        name: 'Security Log Analysis',
        href: ' ',
        icon: <TypeScript />,
      },
      {
        name: 'Linux Security',
        href: '',
        icon: <TypeScript />,
      },
      {
        name: 'Nmap',
        href: ' ',
        icon: <TypeScript />,
      },
      {
        name: 'Attack Surface Assessment',
        href: ' ',
        icon: <TypeScript />,
      },
      // {
      //   name: 'Postman',
      //   href: 'https://www.postman.com/',
      //   icon: <Postman />,
      // },
      // {
      //   name: 'Bun',
      //   href: 'https://bun.sh/',
      //   icon: <Bun />,
      // },
    ],
    website: 'https://pk.linkedin.com/company/itsolerapvtltd',
    certificate: {
      file: '/certificates/itsolera_internship.jpg',
      title: 'Ethical Hacker: Web Application Penetration Testing',
    },
    // github: 'https://github.com/prepeasy',
    // facebook: 'https://www.facebook.com/prepeasy',
  },
  {
    isCurrent: false,
    company: 'Cyborts ',
    position: 'GIAC Digital Forensic & Incident Response Intern ',
    location: 'Remote ',
    image: '/company/cyborts.png',
    description: [
       'Gained exposure to Digital Forensics, Governance, Risk and Compliance (GRC), Network Operations Center (NOC) operations, and Python for Cybersecurity through a structured cybersecurity internship program.',
  'Developed foundational understanding of digital forensic processes, including evidence handling, investigation methodologies, and security incident analysis.',
  'Explored GRC practices involving security policies, risk assessment, compliance requirements, and cybersecurity governance.',
  'Gained practical exposure to NOC operations, including network monitoring, security event awareness, incident identification, and basic troubleshooting workflows.',
  'Applied Python fundamentals to cybersecurity use cases, developing an understanding of how scripting can support security automation, analysis, and repetitive security tasks.',
  'Worked toward building practical cybersecurity skills through guided exercises, real-world scenarios, and collaboration with cybersecurity professionals across multiple security domains.',
    ],
    startDate: 'June 2025',
    endDate: 'September 2025',
    technologies: [
      {
        name: 'Autospy',
        href: 'https://www.autopsy.com/',
        icon: <TypeScript />,
      },
      {
        name: 'FTK',
        href: 'https://www.exterro.com/digital-forensics-software/ftk-imager',
        icon: <TypeScript />,
      },
      {
        name: 'Rekall',
        href: 'https://github.com/google/rekall',
        icon: <TypeScript />,
      },
      {
        name: 'Wireshark',  
        href: 'https://www.wireshark.org/download.html',
        icon: <TypeScript />,
      },
       {
        name: 'YARA',  
        href: 'https://github.com/virustotal/yara/releases',
        icon: <TypeScript />,
      },
    ],
    website: 'https://cyborts.com/',
    // github: 'https://github.com/upsurgeio',
    // x: 'https://x.com/upsurgelabs',
    linkedin: 'https://pk.linkedin.com/company/cyborts',
    certificate: [
      {
        file: '/certificates/cyborts_internship.png',
        title: 'Cyborts Internship Certificate',
      },
      {
        file: '/certificates/dfb01-00020.png',
        title: 'Digital Forensic Certificate',
      },
    ],
  },
  
  // {
  //   isCurrent: false,
  //   company: 'Expelee',
  //   position: 'SDE-1 (Full Stack) Intern',
  //   location: 'Dubai, UAE (Remote)',
  //   image: '/company/expelee.png',
  //   description: [
  //     '*Riskmitra (riskmitra.com)*: Built full-stack product with Next.js, Tailwind CSS, Framer Motion, shadcn, wallet integration, and GitBook integration.',
  //     '*Core AI (core-ai.me)*: Designed and developed with Next.js, Tailwind CSS, Framer Motion, shadcn, focusing on scalability and modular UI design.',
  //     '*GPU AI (gpuai.me)*: Integrated Three.js for interactive 3D elements alongside full-stack features from Core AI setup.',
  //     '*Altranium (gaming.altranium.com)*: Developed immersive gaming platform using Three.js, MERN, Tailwind, and Framer Motion.',
  //     '*Pars Network (parsnetwork.me)*: Engineered landing experience with MERN, Tailwind CSS, and GSAP for advanced animations and transitions.',
  //     '*TEQ Network (teq-network.vercel.app)*: Designed and developed landing page using MERN, Tailwind CSS, and Web3 wallet integration.',
  //   ],
  //   startDate: 'Aug 2023',
  //   endDate: 'April 2025',
  //   technologies: [
  //     {
  //       name: 'Bun',
  //       href: 'https://bun.sh/',
  //       icon: <Bun />,
  //     },
  //     {
  //       name: 'Express',
  //       href: 'https://expressjs.com/',
  //       icon: <ExpressJs />,
  //     },
  //     {
  //       name: 'Figma',
  //       href: 'https://figma.com/',
  //       icon: <Figma />,
  //     },
  //     {
  //       name: 'JavaScript',
  //       href: 'https://javascript.com/',
  //       icon: <JavaScript />,
  //     },
  //     {
  //       name: 'MongoDB',
  //       href: 'https://mongodb.com/',
  //       icon: <MongoDB />,
  //     },
  //     {
  //       name: 'Next.js',
  //       href: 'https://nextjs.org/',
  //       icon: <NextJs />,
  //     },
  //     {
  //       name: 'Node.js',
  //       href: 'https://nodejs.org/',
  //       icon: <NodeJs />,
  //     },
  //     {
  //       name: 'PostgreSQL',
  //       href: 'https://postgresql.org/',
  //       icon: <PostgreSQL />,
  //     },
  //     {
  //       name: 'Prisma',
  //       href: 'https://prisma.io/',
  //       icon: <Prisma />,
  //     },
  //     {
  //       name: 'React',
  //       href: 'https://react.dev/',
  //       icon: <ReactIcon />,
  //     },
  //     {
  //       name: 'TypeScript',
  //       href: 'https://typescriptlang.org/',
  //       icon: <TypeScript />,
  //     },
  //     {
  //       name: 'Postman',
  //       href: 'https://postman.com/',
  //       icon: <Postman />,
  //     },
  //     {
  //       name: 'Vercel',
  //       href: 'https://vercel.com/',
  //       icon: <Vercel />,
  //     },
  //     {
  //       name: 'AWS',
  //       href: 'https://aws.amazon.com/',
  //       icon: <AWS />,
  //     },
  //   ],
  //   website: 'https://expelee.com',
  //   x: 'https://x.com/0xExpelee',
  //   facebook: 'https://www.facebook.com/expeleeOfficial',
  //   linkedin: 'https://www.linkedin.com/company/expelee',
  //   github: 'https://github.com/expeleeOfficial',
  // },
  // {
  //   isCurrent: false,
  //   company: 'Flameloop',
  //   position: 'Junior Frontend Developer',
  //   location: 'Indore, India (offline)',
  //   image: '/company/loop.png',
  //   description: [
  //     'Developed and maintained web applications using HTML, CSS, and JavaScript.',
  //     'Collaborated with cross-functional teams to deliver high-quality software on time.',
  //     'Design & Developed multiple websites for clients.',
  //   ],
  //   startDate: 'June 2023',
  //   endDate: 'July 2023',
  //   website: 'https://flameloop.com',
  //   technologies: [
  //     {
  //       name: 'HTML',
  //       href: 'https://html.com/',
  //       icon: <Html />,
  //     },
  //     {
  //       name: 'CSS',
  //       href: 'https://css.com/',
  //       icon: <CSS />,
  //     },
  //     {
  //       name: 'JavaScript',
  //       href: 'https://javascript.com/',
  //       icon: <JavaScript />,
  //     },
  //     {
  //       name: 'Figma',
  //       href: 'https://figma.com/',
  //       icon: <Figma />,
  //     },
  //     {
  //       name: 'BootStrap',
  //       href: 'https://getbootstrap.com/',
  //       icon: <BootStrap />,
  //     },
  //   ],
  //   x: 'https://x.com/Flameloop149578',
  //   linkedin: 'https://www.linkedin.com/company/flameloop',
  //   facebook: 'https://www.facebook.com/flameloop',
  // },
];
