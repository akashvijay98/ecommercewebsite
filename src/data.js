export const storeProducts = [
  {
    id: 1,
    title: "Asus GTX 1650 Super TUF Gaming OC 4GB",
    img: "img/g1.jpg",
    price: 33,
    company: "GOOGLE",
    info: "OC Edition: Boost Clock 1800 MHz (OC Mode)/ 1770 MHz (Gaming Mode).",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 2,
    title: " MSI GeForce GTX 1660 Ti Ventus XS 6G OC GDDR6 Gaming Graphic Card",
    img:
      "data:image/jpeg;base64,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",
    price: 30,
    company: "S",
    info:
      "Chipset: NVIDIA GeForce GTX 1660 Ti Boost clock: 1750 MH Memory interface: 192-bit Video memory: 6GB GDDR5X Output: DisplayPort x 3 (V1. 4)/ HDMI 2. 0B x.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 3,
    title: "Galax RTX 2070 Super EX (1-Click OC) 8GB",
    img: "img/g4.jpg",
    price: 31,
    company: "htc",
    info:
      "NVIDIA® GeForce ExperienceNVIDIA® Ansel  NVIDIA® G-SYNC™ Compatible NVIDIA® Highlights Game Ready Drivers Microsoft® DirectX® 12 API, Vulkan API, OpenGL 4.6 DisplayPort 1.4, HDMI 2.0b HDCP 2.2 NVIDIA® GPU Boost Ray Tracing, VR Ready All photos, specifications, contents are used for reference only and are subject to change without notice. Actual products in different countries varies and are best to consult your local distributor / importer for confirmation.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 4,
    title: "Gigabyte GeForce RTX 2070 Super Windforce 8G Graphics Card,",
    img: "img/g5.jpg",
    price: 40,
    company: "gigabyte",
    info:
      "LPowered by GeForce RTX 2070, NVIDIA Turing Architecture & Real Time Ray Tracing WINDFORCE 3X Cooling System with Alternate Spinning Fans ntuitive Controls with AORUS Engine, 8GB 256-Bit GDDR6 Core Clock 1785 MHz 1 x HDMI, 3 x DisplayPort, 1 x USB Type-C",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 5,
    title: "Adata XPG Gammix D30 8GB (8GBX1) DDR4 2666MHz",
    img: "img/r1.jpg",
    price: 15,
    company: "Adata",
    info:
      " Edgy Wing-Shaped Design The Performance to Win Overclocking with Intel® XMP  Top-Quality Chips for Enhanced Durabilit ntel® Extreme Memory Profile (XMP) 2.0 makes overclocking a snap and enhances system stability. Instead of adjusting individual parameters in BIOS, you can do it right through the operating system.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 6,
    title: "Adata XPG Spectrix D40 16GB (8GBx2) DDR4 3600MHz RGB",
    img: "img/r2.jpg",
    price: 17,
    company: "Adata",
    info:
      "As the first DDR4 RGB memory by XPG, SPECTRIX D40 integrates stunning performance and visual beauty in an armor-inspired heatsink - perfect for PC DIY enthusiasts, overclockers, and gamers! D40 has been fully tested compatible with popular ASUS AURA Sync software, enabling users to customize proprietary RGB colors and effects to match their systems. In addition, D40 features speeds of over 3600MHz with support for the Intel X299 platform with a starting speed of 2666MHz. It is also compatible with AMD AM4 motherboards. With Intel XMP 2.0 and 10-layer PCBs, D40 enhances overclocking as well as system stability. Like all ADATA memory modules, SPECTRIX D40 comes with a lifetime warranty backed by excellent service for maximum peace of mind..",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 7,
    title: "Acer KG271C 144Hz",
    img: "img/s1.jpg",
    price: 415,
    company: "Acer",
    info:
      "KG1 series feature with high refresh rate 144Hz, The 144Hz refresh rate speeds up the frames per second to deliver an ultra-smooth 2D motion scenes. With a rapid refresh rate of 144Hz, Acer KG1 Series shorten the time it takes for frame rendering, lower input lag and provide gamers an excellent in-game experience.Fast response time of 1ms GTG(Gray to Gray) enhanced gamers' in-game experience. No matter the fast-moving action or any dramatic transitions will be all rendered smoothly without annoying effects of smearing or ghosting through Acer gaming monitors..",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 8,
    title: "ASUS ROG SWIFT PG279Q",
    img: "img/s2.jpg",
    price: 312,
    company: "Asus",
    info:
      "ASUS ROG SWIFT PG279Q - 27 INCH 100% SRGB GAMING MONITOR (NVIDIA G-SYNC, 4MS RESPONSE TIME, 165HZ REFRESH RATE, 2K WQHD IPS PANEL, HDMI, DISPLAYPORTS, SPEAKERS)",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 9,
    title: "Intel Core I5-8400",
    img: "img/2.png",
    price: 320,
    company: "Intel",
    info:
      "8TH GEN INTEL® CORE™ I5-8400 DESKTOP PROCESSOR 6 CORES UP TO 4.0GHZ TURBO LGA1151 (INTEL® 300 SERIES CHIPSET) 65W BX80684I58400",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 10,
    title: "Amd Ryzen 3 3200G APU",
    img: "img/amd.jpg",
    price: 35,
    company: "amd",
    info:
      "AMD RYZEN 3 3200G 2ND GENERATION DESKTOP PROCESSOR WITH WRAITH STEALTH COOLING SOLUTION (RADEON VEGA 8 GRAPHICS, 4 CORE, UP TO 4 GHZ, AM4 SOCKET, 6MB CACHE, 65W).",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 11,
    title: "TH GEN INTEL® CORE™ I7-9700K DESKTOP PROCESSOR 8 CORES ",
    img:
      "data:image/jpeg;base64,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",
    price: 10,
    company: "Intel",
    info:
      "9TH GEN INTEL® CORE™ I7-9700K DESKTOP PROCESSOR 8 CORES UP TO 4.9GHZ UNLOCKED LGA1151 (INTEL® 300 SERIES CHIPSET) 95W BX80684I79700K",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 12,
    title: "Amd Ryzen Threadripper 3960X",
    img: "img/9.png",
    price: 456,
    company: "Amd",
    info:
      "AMD RYZEN THREADRIPPER 3960X 3RD GENERATION DESKTOP PROCESSOR (24 CORE, UP TO 4.5 GHZ, STRX4 SOCKET, 142MB CACHE, 280W).",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 13,
    title: "ASRock X570 Phantom Gaming X (Wi-Fi)",
    img: "img/m1.jpg",
    price: 10,
    company: "ASRock",
    info: "Supports AMD AM4 Socket Ryzen™ 2000 and 3000 Series processors",

    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 14,
    title: "Asus EX-A320M-GAMING",
    img: "img/m2.jpg",
    price: 10,
    company: "Asus",
    info:
      "28 Mb Flash ROM, UEFI AMI BIOS, PnP, DMI3.0, WfM2.0, SM BIOS 3.0, ACPI 6.1, Multi-language BIOS, ASUS EZ Flash 3, ASUS CrashFree BIOS 3, My Favorites, Last Modified log, F12 PrintScreen, ASUS DRAM SPD (Serial Presence Detect) memory information, F6 Qfan Control.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 15,
    title: "Asus EX-B365M-V",
    img: "img/m3.jpg",
    price: 10,
    company: "Asus",
    info:
      "ASUS Expedition motherboards are made for non-stop action, engineered with non-stop durability to prevent damage from moisture, corrosion and overvoltages — for immense longevity. We even test them to the limits, with 144 hour of diskless-system tests and extensive checks for compatibility with top games and over 100 gaming peripherals. And for the ultimate audio, Expedition motherboards have Epic gaming audio to provide exhilarating non-stop gaming performance — and the best stability, reliability, and value for you!",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: 16,
    title: "Asus H81M-CS",
    img: "img/m4.jpg",
    price: 10,
    company: "Asus",
    info:
      "This motherboard supports Intel® 4th generation Core™ i7/i5/i3/Pentium®/Celeron® processors in the LGA1150 package, with iGPU, memory and PCI Express controllers integrated to support onboard graphics output with dedicated chipsets, 2-channel (2 DIMM) DDR3 memory and 16 PCI Express lanes. This provides great graphics performance. Intel® 4th generation Core™ i7/i5/i3/Pentium®/Celeron® processors are among the most powerful and energy efficient CPUs in the world.",
    inCart: false,
    count: 0,
    total: 0
  }
];

export const detailProduct = {
  id: 1,
  title: "Google Pixel - Black",
  img: "img/product-1.png",
  price: 24,
  company: "google",
  info:
    "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
  inCart: false,
  count: 0,
  total: 0
};
