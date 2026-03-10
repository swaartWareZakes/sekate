export const servicesData = [
  {
    id: "civil-structural",
    num: "01",
    title: "Civil & Structural",
    short: "Optimising infrastructure projects from concept through to completion.",
    description: "Whether it’s urban road networks, structural frameworks, bridges, or industrial platforms, our engineers plan, design, supervise, and optimise infrastructure projects from concept through to completion. We adopt a hands-on approach to ensure structures are safe, functional, and cost-effective.",
    features: [
      "Urban and Rural Roads Design (SANRAL and COLTO standards)",
      "Stormwater & Drainage Infrastructure",
      "Bulk Earthworks & Platforms",
      "Water Supply & Reticulation (SANS 10252)",
      "Sewerage and Sanitation Engineering",
      "Building Structures & Bridge Design"
    ],
    media: "/images/bridge.jpg", 
    gallery: ["/images/drawing.jpg", "/images/pexels-vividcafe-681347.jpg"],
    type: "image"
  },
  {
    id: "environmental",
    num: "02",
    title: "Environmental",
    short: "Ensuring all planning activities meet the standards of NEMA regulations.",
    description: "Environmental stewardship is at the heart of sustainable development. Our environmental consultants ensure all planning activities meet strict environmental regulations and sectoral guidelines. From small-scale reservoirs to multi-phase mixed-use developments, we secure the appropriate environmental authorisations.",
    features: [
      "Environmental Impact Assessments (EIAs) & Basic Assessments",
      "Full coordination and submission to DFFE",
      "Compilation of Environmental Management Programmes (EMPr)",
      "Stakeholder and Public Participation Process (PPP)",
      "Environmental Screening Reports & Site Sensitivity",
      "Environmental Auditing & Compliance Monitoring (ECO)"
    ],
    media: "/images/water.jpg",
    gallery: ["/images/water2.jpg", "/images/environmental2.jpg"],
    type: "image"
  },
  {
    id: "land-surveying",
    num: "03",
    title: "Land Surveying",
    short: "Comprehensive surveying services that ensure every project begins with precise data.",
    description: "Every successful project begins with precise, reliable data. Our highly skilled surveying team utilizes state-of-the-art GNSS, Total Stations, and aerial drone mapping technology to deliver professional, regulation-aligned survey outputs for engineering feasibility and environmental impact assessments.",
    features: [
      "Topographic Surveys (Land contours and natural features)",
      "Cadastral Surveys (Legal boundary demarcations)",
      "Engineering Control Surveys",
      "Setting Out Surveys (Accurate infrastructure placement)",
      "As-Built Surveys (Post-construction verification)"
    ],
    media: "/images/surverying2.jpg", 
    gallery: ["/images/surveying.jpg", "/images/pexels-themightynelson-5802827.jpg"],
    type: "image"
  },
  {
    id: "town-planning",
    num: "04",
    title: "Town Planning",
    short: "Navigating regulatory frameworks with efficiency and innovation.",
    description: "We offer end-to-end town planning services that ensure legal compliance, community integration, and long-term sustainability. Our planners navigate complex regulatory frameworks with efficiency, working closely with municipalities to accelerate approvals and unlock land development potential.",
    features: [
      "Township Establishment & Formalisation",
      "Alignment with Municipal Spatial Development Frameworks (SDFs)",
      "Layout Planning (AutoCAD and GIS design)",
      "Rezoning Applications (LUMS and SPLUMA)",
      "Pre-consultation and Public Participation"
    ],
    media: "/images/arial.jpg",
    gallery: ["/images/planning2.jpg", "/images/town.jpg"],
    type: "image"
  }
];

export const projectsData = [
  { 
    id: 1, 
    title: "N3 Highway Expansion", 
    category: "Civil Engineering", 
    img: "/images/bridge.jpg", 
    gallery: ["/images/pexels-vividcafe-681347.jpg", "/images/drawing.jpg"],
    span: "md:col-span-2" 
  },
  { 
    id: 2, 
    title: "Gauteng Water Facility", 
    category: "Environmental", 
    img: "/images/water2.jpg", 
    gallery: ["/images/water.jpg", "/images/environmental.jpg"],
    span: "md:col-span-1" 
  },
  { 
    id: 3, 
    title: "Midrand Urban Grid", 
    category: "Town Planning", 
    img: "/images/town.jpg", 
    gallery: ["/images/arial.jpg", "/images/planning.jpg"],
    span: "md:col-span-1" 
  },
  { 
    id: 4, 
    title: "Durban Port Topography", 
    category: "Land Surveying", 
    img: "/images/surveying.jpg", 
    gallery: ["/images/surverying2.jpg", "/images/pexels-themightynelson-5802822.jpg"],
    span: "md:col-span-2" 
  },
];