import getTime from "./utils/getTime";
import { Tag, KIND, VARIANT } from "baseui/tag";
import { getTagOverrides } from "./overrides/tagOverrides";

const date = getTime();

export const content = {
  headers: ["Milestone name", "Items", "Planned Start"],
  content: [
    ["Concept", "Moodboard, Presentation design", "27 March 2023"],
    ["Conecpt", "Moodboard, Presentation design", "27 March 2023"],
  ],
};

export const itemContent = {
  headers: ["Milestone name", "Items", "Description", "Start Date"],
  content: [
    [
      "Moodboard",
      "Concept Design",
      "Design for the pages inside the screens on lore ipsum",
      date,
    ],
  ],
  tally: ["Moodboard", "Pallet", " ", date],
};

export const paymentContent = {
  headers: [
    "Payment date",
    "Amout",
    "Items",
    "Disbursement report (click to see)",
  ],
  tally: [
    date,
    "INR 12,345",
    "Moodboard design, month 1 retainer costs",
    <span
      style={{
        fontSize: "0.75rem",
        textAlign: "right",
        width: "100%",
        textDecoration: "underline",
        color: "#276EF1",
        cursor: "pointer",
      }}
    >
      MFDN-12345678
    </span>,
  ],
};

export const invoiceContent = {
  headers: [
    "Items",
    "Performa invoice",
    "Performa invoice Date",
    "Status",
    "Invoice",
    "Invoice Date",
  ],
  content: [
    [
      "Moodboard design, month 1 retainer costs",
      <span
        style={{
          fontSize: "0.75rem",
          textAlign: "right",
          width: "100%",
          textDecoration: "underline",
          color: "#276EF1",
          cursor: "pointer",
        }}
      >
        MFDN-12345678
      </span>,
      "12 April 2023",
      <Tag
        overrides={getTagOverrides("#666")}
        closeable={false}
        kind={KIND.primary}
        variant={VARIANT.solid}
      >
        Payment pending
      </Tag>,
      "-",
      "-",
    ],
    [
      "Moodboard design, month 1 retainer costs",
      <span
        style={{
          fontSize: "0.75rem",
          textAlign: "right",
          width: "100%",
          textDecoration: "underline",
          color: "#276EF1",
          cursor: "pointer",
        }}
      >
        MFDN-12345678
      </span>,
      "12 April 2023",
      <Tag
        overrides={getTagOverrides()}
        closeable={false}
        kind={KIND.positive}
        variant={VARIANT.solid}
      >
        Payment collected
      </Tag>,
      <span
        style={{
          fontSize: "0.75rem",
          textAlign: "right",
          width: "100%",
          textDecoration: "underline",
          color: "#276EF1",
          cursor: "pointer",
        }}
      >
        MFDN-12345678
      </span>,
      date,
    ],
  ],
};
