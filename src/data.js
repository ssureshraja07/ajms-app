import service1 from "./images/service-1.png";
import service2 from "./images/service-2.png";
import service3 from "./images/service-3.png";
import service4 from "./images/inwaater.png";
import service5 from "./images/service-5.png";
import service6 from "./images/service-6.png";
import general from "./images/general.png";
import vision from "./images/our-vision.png";
import full from "./images/full.png";
import commercial from "./images/commercial.png";
import ad10 from "./images/n9.png";
import cali1 from "./images/cali1.png";
import cali2 from "./images/cali2.png";
import cali3 from "./images/cali3.png";
import shipDive from "./images/ship-diving.png";
import ad4 from "./images/fixed-gas.png";
import ad5 from "./images/ullage.png";
import ad6 from "./images/ows-alarm.png";
import ad7 from "./images/odme-system.png";
import ad8 from "./images/fixed-ox.png";
import ad9 from "./images/firealarm.png";
import isoCertificate from "./images/iso-certificate.png";





export const services = [
  {
      id: "calibration",
  badge: "ISO 9001:2015 IRQS Certified",
  certificate: isoCertificate,
  title: "Calibration Services",
    description:
      "Professional inspection and calibration services for marine safety, monitoring, and measurement equipment.",
    image: service1,
    icon: "⚙️",
    tag: "Safety & Compliance",

    details: [
      "Inspection and calibration of pressure gauges to help ensure accurate and reliable pressure readings during marine and vessel operations.",
      "Inspection and calibration of pressure and temperature transmitters, supporting dependable monitoring and measurement across vessel systems.",
      "Calibration of temperature sensors to maintain accurate temperature measurement and reliable monitoring performance.",
      "Inspection and calibration of pressure and temperature calibrators to support accurate testing and verification of marine measurement equipment.",
      "Calibration of portable and fixed gas detectors to help maintain reliable gas monitoring and safety functions onboard vessels.",
      "Inspection and functional testing of fixed gas detection systems to verify proper operation, detection performance, and system readiness.",
      "Calibration of UTI tapes to support accurate measurement and monitoring requirements during vessel and tank operations.",
      "Inspection and calibration of oily water separator systems, including 15 ppm bilge alarm monitor systems, to support reliable operation and monitoring.",
      "Calibration of Oil Discharge Monitoring Equipment (ODME) systems to help maintain accurate monitoring and dependable operational performance.",
      "Inspection and calibration of vapour monitoring systems to support reliable vapour detection, measurement, and safe vessel operations.",
      "Inspection and function testing of fire alarm systems to verify proper operation and readiness of critical onboard safety equipment.",
      "Inspection and function testing of smoke detection systems to help ensure reliable detection and early warning capability onboard vessels.",
      "AJ MARINE SERVICES supports vessel owners, operators, and marine teams with inspection, calibration, testing, and service coordination based on equipment type, operating requirements, and agreed service scope.",
      "All activities are planned with attention to accuracy, proper equipment handling, operational requirements, and reliable service documentation to support vessel maintenance and compliance needs.",
    ],

    equipmentGroups: [
  {
    id: "temperature",
    title: "Temperature Equipments",
    icon: "🌡️",
    image: cali3,
    items: [
      "Temperature Calibrator",
      "Temperature Gauge",
      "Temperature Thermometer",
      "Temperature Transmitters",
    ],
  },
  {
    id: "pressure",
    title: "Pressure Equipments",
    icon: "ϟ",
    image: cali2,
    items: [
      "Pressure Calibrator",
      "Pressure Gauge",
      "Compound Gauge",
      "Pressure Transmitters",
    ],
  },
  {
    id: "gas",
    title: "Gas Detectors",
    icon: "◉",
    image: cali1,
    items: [
      "Single Gas Detectors",
      "Multi-Gas Detectors",
      "RKI, Honeywell, GMI",
      "Crowcon, Scott Safety, MSA",
    ],
  },
  {
    id: "fixed-gas",
    title: "Fixed Gas Detection System",
    subtitle: "Calibration of Fixed Gas Detection System",
    icon: "🛡️",
    image: ad4,
    items: ["RKI Systems", "TOKA SEIKI", "HONEYWELL", "CONSILIUM"],
  },
  {
    id: "ullage",
    title: "Ullage Temperature Interface",
    subtitle: "Advanced ullage and temperature monitoring systems",
    icon: "🌡️",
    image: ad5,
    items: ["MMC Systems", "HERMATIC", "TANKTECH", "Interface Calibration"],
  },
  {
    id: "ows",
    title: "OWS Bilge Alarm System",
    subtitle: "15PPM Bilge Alarm Monitor System",
    icon: "💧",
    image: ad6,
    items: [
      "Rivertrace Systems",
      "Fellow Kogyo",
      "Deckma Hamburg",
      "Bilgemon Systems",
    ],
  },
  {
    id: "odme",
    title: "ODME System",
    subtitle: "Oil Discharge Monitoring Equipment",
    icon: "🛢️",
    image: ad7,
    items: [
      "Brannstrom Sweden",
      "Jowa Systems",
      "VAF Instruments",
      "Functional Testing",
    ],
  },
  {
    id: "oxygen",
    title: "Fixed Oxygen Analyzer",
    subtitle: "Precision oxygen monitoring systems",
    icon: "⚡",
    image: ad8,
    items: [
      "Oxygen Level Monitoring",
      "Calibration Services",
      "Maintenance & Repair",
      "System Integration",
    ],
  },
  {
    id: "vapour",
    title: "Vapour Monitoring System",
    subtitle: "Advanced vapour detection and monitoring",
    icon: "💨",
    image: ad10,
    items: [
      "Vapour Detection",
      "System Calibration",
      "Maintenance Services",
      "Safety Compliance",
    ],
  },
  {
    id: "fire-alarm",
    title: "Fire Alarm System",
    subtitle: "Comprehensive fire safety systems",
    icon: "🚨",
    image: ad9,
    items: [
      "Fire Alarm Panels",
      "System Monitoring",
      "State Indication",
      "Maintenance & Testing",
    ],
  },
],
  },

  {
    id: "ship-diving",

    title: "Ship Diving Services",

    description:
      "Professional underwater diving and ship maintenance services carried out by qualified diving professionals.",

    image: shipDive,

    icon: "🤿",

    tag: "Underwater Operations",

    details: [
      "Professional underwater diving support is essential for vessels that require inspection, maintenance, repair, or other underwater operations.",
      "AJ MARINE SERVICES provides ship diving services for vessel owners, operators, marine contractors, and port-related requirements.",
      "Our underwater diving activities can support hull inspection, propeller inspection, underwater maintenance, cleaning, and other agreed marine requirements.",
      "Each diving operation is planned according to the vessel's location, underwater conditions, accessibility, and required scope of work.",
      "Our diving professionals work with a focus on safe and systematic execution while considering the operational requirements of the vessel.",
      "Underwater inspection and maintenance activities can be carried out with appropriate reporting and visual documentation where required.",
      "Our objective is to provide dependable underwater support while helping vessel operators minimise unnecessary operational delays.",
    ],

    subServices: [
      {
        id: "hull-cleaning",
        title: "Hull Cleaning",
        description:
          "Efficient underwater hull cleaning services to maintain vessel performance and reduce marine fouling.",
        image: service3,
        icon: "🚢",
        tag: "Performance Maintenance",
        details: [
          "Fuel consumption constitutes one of the largest operating costs for modern vessels, making hull cleanliness and efficiency an important priority for ship owners and operators.",
          "Even a small build-up of marine growth on a vessel's underwater hull can increase resistance through the water, resulting in additional fuel consumption and increased emissions.",
          "AJ MARINE SERVICES provides quick but thorough hull cleaning services designed to remove marine growth and fouling while giving careful attention to the vessel's underwater coating.",
          "Our approach focuses on protecting the existing hull coating while achieving the required level of underwater cleanliness.",
          "Cleaning methods and equipment can be selected according to the vessel's hull condition, coating system, marine growth, and operational requirements.",
          "Our team works to complete hull cleaning efficiently, helping vessels maintain better underwater performance and supporting improved operational efficiency.",
          "Hull cleaning can also help reduce the effects of biofouling and maintain a cleaner underwater surface during vessel operations.",
          "After completion, relevant observations can be documented to provide vessel operators with a clear record of the work performed and the underwater hull condition.",
        ],
      },

      {
        id: "water-surveys",
        title: "In-Water Surveys",
        description:
          "Professional underwater inspection and in-water survey services for vessels and marine structures.",
        image: service4,
        icon: "📡",
        tag: "Inspection & Survey",
        details: [
          "Accurate underwater information is essential when assessing the condition of vessels, marine structures, and subsea assets.",
          "AJ MARINE SERVICES provides professional underwater inspection and in-water survey support for vessels and marine structures.",
          "Our survey activities can include underwater visual inspection, condition assessment, photographic documentation, video inspection, and other agreed survey requirements.",
          "We can support inspection activities around vessel hulls, propellers, rudders, underwater structures, and other accessible areas below the waterline.",
          "Survey planning takes into consideration the vessel's location, water conditions, underwater visibility, accessibility, and specific requirements of the assignment.",
          "Relevant underwater findings can be documented through photographs, video footage, observations, and service reports depending on the scope of work.",
          "Our goal is to provide clear and useful underwater information that helps vessel owners and operators make informed maintenance and operational decisions.",
        ],
        additionalUnderwaterServices: [
          "Underwater photography and video inspection",
          "Underwater visual condition assessment",
          "Hull, propeller and rudder inspection",
          "Underwater structural inspection",
          "Subsea condition documentation",
          "Other agreed underwater inspection and service requirements",
        ],
        classApprovedInWaterSurveys: [
          "Class-related in-water inspection support where applicable",
          "Underwater visual examination of accessible hull areas",
          "Photographic and video documentation of underwater findings",
          "Identification and reporting of visible defects or abnormalities",
          "Coordination with the attending classification surveyor or authorised representative",
          "Survey activities carried out according to the agreed class and inspection requirements",
        ],
      },

      {
        id: "propeller-polishing",
        title: "Propeller Polishing",
        description:
          "Precision propeller polishing services to improve vessel efficiency and maintain underwater performance.",
        image: service5,
        icon: "🔩",
        tag: "Efficiency Boost",
        details: [
          "The condition of a vessel's propeller has a direct influence on propulsion efficiency, fuel consumption, and overall vessel performance.",
          "Marine growth, fouling, and surface roughness can affect the hydrodynamic performance of a propeller and increase resistance during operation.",
          "AJ MARINE SERVICES provides underwater propeller polishing services designed to restore a cleaner and smoother propeller surface.",
          "Our team can inspect the propeller condition before polishing and identify visible marine growth, fouling, or surface-related concerns.",
          "The polishing process is carried out with attention to the propeller surface and the operational requirements of the vessel.",
          "Underwater propeller polishing can help reduce the need for unnecessary vessel downtime while maintenance is performed while the vessel remains afloat.",
          "A cleaner and smoother propeller surface can support improved propulsion performance and operational efficiency.",
          "Relevant observations and completed work can be documented after the service for the vessel operator's maintenance records.",
        ],
      },
    ],
  },

  {
    id: "general-diving-services",

    title: "General Diving Services",

    description:
      "Full-service commercial diving, inspection, welding and fabrication support for inshore and offshore marine requirements.",

    // DUMMY images - original image vandha import panni maathidu (e.g. image: service6)
    image: general,

    icon: "⚓",

    tag: "Commercial Diving",

    details: [],

    sections: [
    
    ],

    // 14 diving service categories - rendered by <ServiceGroups /> in ServiceDetails.jsx
    serviceGroups: [
      {
        id: "inspection-survey",
        icon: "inspection",
        title: "Underwater Inspection & Survey",
        items: [
          "Underwater structural inspection",
          "Live CCTV inspection and video documentation",
          "Underwater visual surveys",
          "Underwater damage assessment",
          "Weld seam visual inspection",
          "Underwater measurements and clearance checks",
          "Underwater photographic documentation",
        ],
      },
      {
        id: "cleaning-maintenance",
        icon: "cleaning",
        title: "Underwater Cleaning & Maintenance",
        items: [
          "Marine growth and fouling removal from submerged structures",
          "Cleaning of underwater concrete structures",
          "Intake screen and submerged grating cleaning",
          "Underwater debris removal",
          "Sediment and obstruction removal support",
          "Cleaning of submerged equipment and structures",
        ],
      },
      {
        id: "repair-services",
        icon: "repair",
        title: "Underwater Repair Services",
        items: [
          "Underwater welding and cutting",
          "Underwater fastening, bolting, and fitting installation",
          "Underwater structural repairs",
          "Temporary underwater patching and leak containment",
          "Underwater component installation and removal",
          "Repair support for submerged infrastructure",
        ],
      },
      {
        id: "marine-infrastructure",
        icon: "infrastructure",
        title: "Marine Infrastructure Inspection",
        items: [
          "Jetty and quay wall inspection",
          "Underwater pile and foundation inspection",
          "Bridge pier and submerged foundation inspection",
          "Harbour and berth infrastructure inspection",
          "Pontoon and floating structure inspection",
          "Fender system inspection",
          "Submerged retaining wall inspection",
        ],
      },
      {
        id: "pipeline-cable",
        icon: "pipeline",
        title: "Subsea Pipeline & Cable Inspection",
        items: [
          "Submerged pipeline visual inspection",
          "Pipeline support and joint inspection",
          "Subsea cable route visual inspection support",
          "Pipeline exposure and free-span assessment",
          "Subsea infrastructure condition surveys",
          "Underwater pipeline obstruction identification",
        ],
      },
      {
        id: "testing-ndt",
        icon: "testing",
        title: "Underwater Testing & NDT Support",
        items: [
          "Underwater ultrasonic thickness measurement",
          "Underwater dimensional measurements",
          "Submerged structure condition assessment",
          "Cathodic protection and anode condition surveys",
          "Underwater corrosion assessment support",
          "Specialist underwater NDT through qualified personnel",
        ],
      },
      {
        id: "search-recovery",
        icon: "recovery",
        title: "Underwater Search & Recovery",
        items: [
          "Search for lost underwater objects",
          "Recovery of submerged equipment and machinery",
          "Underwater debris and obstruction removal",
          "Recovery of anchors, chains, and other submerged objects",
          "Underwater location marking",
          "Salvage contractor support",
        ],
      },
      {
        id: "offshore-subsea",
        icon: "offshore",
        title: "Offshore & Subsea Diving Support",
        items: [
          "Offshore platform underwater inspection",
          "Subsea structure visual inspection",
          "Riser and submerged fitting inspection",
          "Mooring system inspection support",
          "Offshore construction diving support",
          "Subsea installation assistance",
          "Underwater maintenance of offshore infrastructure",
        ],
      },
      {
        id: "marine-construction",
        icon: "construction",
        title: "Marine Construction & Civil Diving",
        items: [
          "Underwater concrete inspection",
          "Cofferdam inspection support",
          "Submerged foundation inspection",
          "Underwater piling inspection",
          "Underwater excavation and sediment removal support",
          "Marine construction inspection assistance",
          "Underwater installation support",
        ],
      },
      {
        id: "water-infrastructure",
        icon: "water",
        title: "Water Infrastructure Diving",
        items: [
          "Dam wall and submerged structure inspection",
          "Reservoir underwater inspection",
          "Intake and outfall structure inspection",
          "Water tank and submerged chamber inspection",
          "Underwater valve and gate inspection support",
          "Intake screen cleaning",
          "Inspection of submerged water infrastructure",
        ],
      },
      {
        id: "environmental-aquaculture",
        icon: "environment",
        title: "Environmental & Aquaculture Diving",
        items: [
          "Underwater marine debris removal",
          "Submerged litter surveys",
          "Fish farm cage and net inspection",
          "Aquaculture mooring inspection",
          "Underwater net maintenance and repair",
          "Environmental inspection support",
        ],
      },
      {
        id: "cctv-documentation",
        icon: "cctv",
        title: "Underwater CCTV & Documentation",
        items: [
          "Live underwater CCTV feed",
          "Recorded underwater video surveys",
          "Underwater photography",
          "Before-and-after inspection documentation",
          "Defect identification and visual records",
          "Digital inspection reports",
        ],
      },
      {
        id: "commercial-diving-support",
        icon: "commercial",
        title: "Commercial Diving Support",
        items: [
          "Surface-supplied air diving operations",
          "Diving team and equipment mobilisation",
          "Underwater worksite preparation",
          "Diving supervision and operational documentation",
          "Job-specific dive plans and risk assessments",
          "Underwater tool and equipment support",
        ],
      },
      {
        id: "emergency-specialised",
        icon: "emergency",
        title: "Emergency & Specialised Diving Support",
        items: [
          "Emergency underwater inspections",
          "Submerged infrastructure damage assessment",
          "Emergency leak assessment and containment support",
          "Sunken-object location and recovery assistance",
          "Underwater incident inspection",
          "Specialist salvage and recovery contractor support",
        ],
      },
    ],
  },

  {
    id: "allied-services",

    title: "FFA/LSA Services",

    description:
      "Specialized fire fighting and life saving appliance inspection, testing, and allied marine services.",

    image: service6,

    icon: "🛡️",

    tag: "Safety Equipment",

    details: [
      "Fire Fighting Appliances (FFA) and Life Saving Appliances (LSA) are essential components of vessel safety systems and require regular inspection, maintenance, testing, and service attention.",

      "AJ MARINE SERVICES provides allied marine safety services supporting vessel owners and operators with FFA and LSA related requirements.",

      "Our service scope can include inspection, testing, maintenance support, servicing coordination, and documentation according to the agreed vessel requirements.",

      "Fire Fighting Appliance support can cover applicable firefighting equipment and systems that require periodic inspection and service attention.",

      "Life Saving Appliance support can cover applicable life-saving equipment and associated maintenance requirements.",

      "Our team works with vessel representatives to understand equipment condition, service schedules, operational requirements, and the required scope of work.",

      "Proper service records and documentation can be maintained as part of the agreed scope to support vessel safety management and operational readiness.",

      "We focus on dependable service coordination and professional execution to help vessels maintain their required safety equipment in operational condition.",
    ],
  },
];