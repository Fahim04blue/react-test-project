import Image from "next/image";

export const menuItems = [
  {
    text: "Dashboard",
    icon: <Image src="/dashboard.svg" width={30} height={30} />,
    path: "/",
  },
  {
    text: "Table",
    icon: <Image src="/table.svg" width={30} height={24} />,
    path: "/table",
  },
  {
    text: "Note",
    icon: <Image src="/note.svg" width={20} height={30} />,
    path: "/note",
  },
  {
    text: "News",
    icon: <Image src="/news.svg" width={30} height={22} />,
    path: "/news",
  },
  {
    text: "Security",
    icon: <Image src="/security.svg" width={24} height={30} />,
    path: "/security",
  },
  {
    text: "Profile",
    icon: <Image src="/profile.svg" width={27} height={30} />,
    path: "/profile",
  },
  {
    text: "Weather",
    icon: <Image src="/weather.svg" width={30} height={30} />,
    path: "/weather",
  },
  {
    text: "Frames",
    icon: <Image src="/frames.svg" width={30} height={30} />,
    path: "/frames",
  },
  {
    text: "Benefits",
    icon: <Image src="/benefits.svg" width={30} height={30} />,
    path: "/benefits",
  },
];
