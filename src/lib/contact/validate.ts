const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_NAME_LENGTH = 200;

export interface ContactInput {
  name: string;
  email: string;
  message: string;
  pageUrl?: string;
}

export function validateContactInput(body: {
  name?: string;
  email?: string;
  message?: string;
  pageUrl?: string;
}): { ok: true; data: ContactInput } | { ok: false; error: string } {
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const pageUrl = body.pageUrl?.trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Missing required fields." };
  }
  if (name.length > MAX_NAME_LENGTH) {
    return { ok: false, error: "Name is too long." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return {
      ok: false,
      error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`,
    };
  }

  return {
    ok: true,
    data: { name, email, message, pageUrl: pageUrl || undefined },
  };
}
