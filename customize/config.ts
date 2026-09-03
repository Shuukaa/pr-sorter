import type { AppConfig } from "../src/app/types";

export const config = {
  localStoragePrefix: "mamoru-miyano-sorter",
  title: "Mamoru Miyano Sorter",
  description: "Party rank sorter for your custom list of songs.",
  // Tags group this sorter under one or more headers on the collection homepage.
  tags: ["Artist"],
  // Optional voting deadline (ISO 8601). Written into the generated sorter-index.json.
  deadline: new Date("2026-09-05T04:00:00.000Z"),
  // Uncomment the following lines to enable Google Sheets integration. Make sure to fill in the correct values.
 googleSheets: {
    scoreColumnHeader: "Score (optional)",
 },
} satisfies AppConfig;
