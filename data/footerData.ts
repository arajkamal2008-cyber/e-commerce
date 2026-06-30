import { IFooterLink } from "@/interfaces/footer";

export const footerData:IFooterLink[]=[
    {
        title:"Browse",
        urlData: [
            {
                urlTitle:"Store Location",
                urlLink: "#",
            },
            {
                urlTitle: "Delivery Estimates",
                urlLink: "#",
            },
            {
                urlTitle:"Careers",
                urlLink: "#",
            },
        ],
    },
    {
    title: "Support",
    urlData: [
      { urlTitle: "Help Center", urlLink: "#" },
      { urlTitle: "Refund Policies", urlLink: "#" },
      { urlTitle: "Submit Ticket", urlLink: "#" },
    ],
  },
  {
    title: "Legal",
    urlData: [
      { urlTitle: "Privacy Terms", urlLink: "#" },
      { urlTitle: "Terms of Service", urlLink: "#" },
      { urlTitle: "Cookie Settings", urlLink: "#" },
    ],
  },
];