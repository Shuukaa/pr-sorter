import type { AppConfig } from "../src/app/types";

export const config = {
  localStoragePrefix: "mamoru-miyano-sorter",
  title: "Mamoru Miyano",
  description: "Party rank sorter for Mamoru Miyano anime songs.",
  // Tags group this sorter under one or more headers on the collection homepage.
  tags: ["Artist"],
  // Optional voting deadline (ISO 8601). Written into the generated sorter-index.json.
  deadline: new Date("2026-09-05T04:00:00.000Z"),
  // Uncomment the following lines to enable Google Sheets integration. Make sure to fill in the correct values.
   googleSheets: {
     clientId: "859512107931-vghv0ldr90a6ilc14ug3g3rk3b2eg43b.apps.googleusercontent.com",
     appId: "859512107931",
     rankColumnHeader: "Rank",
  //   This setting will only work if `scoreColumnHeader` is not set, allowing users to specify their own score column header in the sheet.
  //   If `scoreColumnHeader` is set, that value will be used as the score column header and users won't be able to change it.
  //   allowCustomScoreColumn: true,
     scoreColumnHeader: "Score",
   },
} satisfies AppConfig;
