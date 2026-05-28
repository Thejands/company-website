function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Process inline markdown: **bold** and _italic_ (after HTML escaping). */
function processInline(text: string): string {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/_(.+?)_/g, "<em>$1</em>");
}

/** Turn admin markdown-style job text into HTML for the careers page. */
export function formatJobDescription(text: string): string {
  const lines = text.trim().split("\n");
  const html: string[] = [];
  let inList = false;

  const closeList = () => {
    if (inList) {
      html.push("</ul>");
      inList = false;
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    // Blank line - close any open list, skip
    if (!trimmed) {
      closeList();
      continue;
    }

    // Skip h1 headings (job title is already shown in the page header)
    if (trimmed.startsWith("# ") && !trimmed.startsWith("## ")) {
      continue;
    }

    // Skip --- separators (sections are visually divided by h2 headings)
    if (trimmed === "---") {
      continue;
    }

    if (trimmed.startsWith("## ")) {
      closeList();
      html.push(`<h2>${escapeHtml(trimmed.slice(3))}</h2>`);
    } else if (trimmed.startsWith("### ")) {
      closeList();
      html.push(`<h3>${escapeHtml(trimmed.slice(4))}</h3>`);
    } else if (trimmed.startsWith("- ")) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${processInline(trimmed.slice(2))}</li>`);
    } else {
      closeList();
      html.push(`<p>${processInline(trimmed)}</p>`);
    }
  }

  closeList();
  return html.join("\n");
}
