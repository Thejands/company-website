import { google } from "googleapis";
import { getEnv, parseServiceAccountJson } from "@/lib/env";

export function getSheetsClient() {
  const raw = getEnv("GOOGLE_SERVICE_ACCOUNT_JSON");
  const spreadsheetId = getEnv("GOOGLE_SHEETS_SPREADSHEET_ID");
  if (!raw || !spreadsheetId) return null;

  const credentials = parseServiceAccountJson(raw);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return {
    sheets: google.sheets({ version: "v4", auth }),
    spreadsheetId,
  };
}

export function getSheetTabName(fallback: string): string {
  return getEnv("GOOGLE_SHEETS_TAB_NAME") ?? fallback;
}

export function getErrorsTabName(): string {
  return getEnv("GOOGLE_SHEETS_ERRORS_TAB_NAME") ?? "errors";
}
