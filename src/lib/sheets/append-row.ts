import {
  getErrorsTabName,
  getSheetsClient,
  getSheetTabName,
} from "@/lib/sheets/google-client";

async function appendWithRetry(
  spreadsheetId: string,
  range: string,
  values: string[][],
): Promise<void> {
  const client = getSheetsClient();
  if (!client) throw new Error("Google Sheets not configured");

  const attempt = async () => {
    await client.sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values },
    });
  };

  try {
    await attempt();
  } catch (first) {
    await new Promise((r) => setTimeout(r, 400));
    try {
      await attempt();
    } catch {
      throw first;
    }
  }
}

export interface ContactRow {
  id: string;
  submittedAt: string;
  name: string;
  email: string;
  message: string;
  pageUrl: string;
  environment: string;
  status: string;
}

export async function appendContactRow(row: ContactRow): Promise<void> {
  const client = getSheetsClient();
  if (!client) {
    console.info("[sheets] Skipped contact row (not configured)", row.id);
    return;
  }

  const tab = getSheetTabName("contact_submissions");
  const range = `${tab}!A:H`;
  const values = [
    [
      row.id,
      row.submittedAt,
      row.name,
      row.email,
      row.message,
      row.pageUrl,
      row.environment,
      row.status,
    ],
  ];

  await appendWithRetry(client.spreadsheetId, range, values);
}

export async function appendErrorRow(params: {
  occurredAt: string;
  context: string;
  submissionId?: string;
  error: string;
  environment: string;
}): Promise<void> {
  const client = getSheetsClient();
  if (!client) {
    console.error("[sheets] Error log (not configured)", params);
    return;
  }

  const tab = getErrorsTabName();
  const range = `${tab}!A:E`;
  const values = [
    [
      params.occurredAt,
      params.context,
      params.submissionId ?? "",
      params.error,
      params.environment,
    ],
  ];

  try {
    await appendWithRetry(client.spreadsheetId, range, values);
  } catch (e) {
    console.error("[sheets] Failed to append error row", e, params);
  }
}
