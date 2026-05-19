import { getSheetsClient, getSheetTabName } from "@/lib/sheets/google-client";

export interface ContactSubmissionRow {
  id: string;
  submittedAt: string;
  name: string;
  email: string;
  message: string;
  pageUrl: string;
  environment: string;
  status: string;
}

export async function readContactSubmissions(
  limit = 100,
): Promise<ContactSubmissionRow[]> {
  const client = getSheetsClient();
  if (!client) return [];

  const tab = getSheetTabName("contact_submissions");
  const res = await client.sheets.spreadsheets.values.get({
    spreadsheetId: client.spreadsheetId,
    range: `${tab}!A2:H${limit + 1}`,
  });

  const rows = res.data.values ?? [];
  return rows
    .map((row) => ({
      id: String(row[0] ?? ""),
      submittedAt: String(row[1] ?? ""),
      name: String(row[2] ?? ""),
      email: String(row[3] ?? ""),
      message: String(row[4] ?? ""),
      pageUrl: String(row[5] ?? ""),
      environment: String(row[6] ?? ""),
      status: String(row[7] ?? "new"),
    }))
    .filter((r) => r.id)
    .reverse();
}
