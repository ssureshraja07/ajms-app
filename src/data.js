
import service1 from "./images/service-1.png";
import service2 from "./images/service-2.png";
import service3 from "./images/service-3.png";
import service4 from "./images/service-4.png";
import service5 from "./images/service-5.png";
import service6 from "./images/service-6.png";
import general from "./images/general-ship.png";
import vision from "./images/our-vision.png";
import full from "./images/full.png";
import commercial from "./images/commercial.png";
import welding from "./images/welding.png";


export const services = [
  {
    id: "calibration",

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
  },

  {
  id: "ship-diving",

  title: "In-Water surveys",

  description:
    "Professional underwater diving and ship maintenance services carried out by qualified diving professionals.",

  image: service2,

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
      title: "Water Surveys",
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
    {
      heading: "Our Vision",
      paragraphs: [
        "Our vision is to become market leaders in providing world-class underwater services in both the inshore and offshore industries.",
        "Starting with a solid foundation of great divers, our experienced team comprises dedicated personnel coming from a variety of different backgrounds. We consider our diversity our core strength as it gives us the ability to take on any challenge and tackle any job.",
      ],
      image: vision,
    },

    {
      heading: "A Full-Service Company",
      paragraphs: [
        "AJ MARINE SERVICES is proud to be a full-service company.",
        "We make every effort to ensure a seamless and worry-free experience between us and our clients, from start to finish.",
        "We use internationally recognized surface-supplied divers who are adaptable in any range of tasks, giving you the highest quality work at the best possible price.",
      ],
      image: full,
      reverse: true,
    },

    {
      heading: "Our Commercial Diving Services Include",
      note: "(but are not limited to)",
      items: [
        "Surface-supplied diving support systems",
        "CCTV video recording suite with voice communications",
        "Inspections with internationally certified divers",
        "Damage profiling and assessments",
        "Construction / inshore services",
        "Jetties, piers, marinas, and docks",
      ],
      image: commercial,
    },

    // {
    //   heading: "Welding and Fabricating Capabilities",
    //   paragraphs: [
    //     "Our welders/divers are fully qualified to the highest international standards.",
    //     "Avail our welding services in both topside and subsea applications.",
    //   ],
    //   items: [
    //     "Cofferdam manufacturing and installation",
    //     "Structural and coded 6F/6G welding capabilities",
    //     "Sea chest and rope guard building",
    //     "Doubler plate affixing and leak management",
    //     "Permanent and temporary repair solutions",
    //     "Pipework and high-pressure vessels",
    //     "Bespoke fabrication projects",
    //   ],
    //   image: welding,
    //   reverse: true,
    // },
  ],

  // Bottom gallery - dummy images
  gallery: [
    "https://placehold.co/900x700/0f172a/22d3ee?text=Gallery+1",
    "https://placehold.co/900x700/0f172a/22d3ee?text=Gallery+2",
    "https://placehold.co/900x700/0f172a/22d3ee?text=Gallery+3",
    "https://placehold.co/900x700/0f172a/22d3ee?text=Gallery+4",
    "https://placehold.co/900x700/0f172a/22d3ee?text=Gallery+5",
    "https://placehold.co/900x700/0f172a/22d3ee?text=Gallery+6",
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

