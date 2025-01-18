import {
  FaHardHat,
  FaClipboardCheck,
  FaRoad,
  FaShieldAlt,
  FaRegChartBar,
  FaRulerCombined,
} from "react-icons/fa";

export const servicesData = {
  "authority-engineer": {
    id: "authority-engineer",
    title: "Authority Engineer",
    description:
      "Neutral monitoring and facilitation of infrastructure projects under PPP frameworks.",
    fullDescription:
      "In India, road projects under the Public-Private Partnership (PPP) framework require meticulous oversight. Our Authority Engineers provide independent, comprehensive monitoring to ensure project compliance, quality, and timely execution.",
    icon: FaHardHat,
  },
  dpr: {
    id: "dpr",
    title: "Detailed Project Report (DPR)",
    description:
      "Comprehensive planning and design solutions for infrastructure development.",
    fullDescription:
      "Our expert team delivers detailed project reports that encompass master planning, infrastructure design, environmental studies, and comprehensive engineering solutions across transportation, energy, and urban development sectors.",
    icon: FaClipboardCheck,
  },
  maintenance: {
    id: "maintenance",
    title: "O&M Supervision",
    description:
      "Ensuring optimal road maintenance and adherence to prescribed standards.",
    fullDescription:
      "We provide comprehensive Operation & Maintenance supervision, monitoring road conditions, ensuring safety standards, and maintaining infrastructure quality through rigorous inspection and proactive management.",
    icon: FaRoad,
  },
  safety: {
    id: "safety",
    title: "Safety Consulting",
    description:
      "Developing infrastructure projects with comprehensive safety protocols.",
    fullDescription:
      "Our safety consultants develop robust safety management systems, conduct risk assessments, and implement comprehensive safety protocols to ensure the highest standards of infrastructure safety.",
    icon: FaShieldAlt,
  },
  "project-management": {
    id: "project-management",
    title: "Project Management",
    description:
      "Expert consultation on road infrastructure and project management best practices.",
    fullDescription:
      "We offer end-to-end project management solutions, combining technical expertise, strategic planning, and innovative approaches to deliver successful infrastructure projects efficiently.",
    icon: FaRegChartBar,
  },
  "design-engineering": {
    id: "design-engineering",
    title: "Design Engineering",
    description:
      "Specialized pavement design focusing on durability and environmental sustainability.",
    fullDescription:
      "Our design engineering team creates innovative, sustainable pavement solutions that balance durability, performance, and environmental considerations, ensuring long-lasting infrastructure.",
    icon: FaRulerCombined,
  },
  Arbitration: {
    id: "Arbitration",
    title: "Arbitration",
    description:
      "Specialized pavement design focusing on durability and environmental sustainability.",
    fullDescription:
      "Our design engineering team creates innovative, sustainable pavement solutions that balance durability, performance, and environmental considerations, ensuring long-lasting infrastructure.",
    icon: FaRulerCombined,
  },
};

export const servicesList = Object.values(servicesData);
