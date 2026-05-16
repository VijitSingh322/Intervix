const LANGUAGE_IDS = {
  javascript: 63,
  python: 71,
  java: 62,
  cpp: 54,
  c: 50,
};

export async function executeCode(language, code) {
  try {
    const languageId = LANGUAGE_IDS[language];

    if (!languageId) {
      return { success: false, error: `Unsupported language: ${language}` };
    }

    const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
        body: JSON.stringify({
          language_id: languageId,
          source_code: code,
        }),
      }
    );

    const data = await response.json();

    if (data.stderr) {
      return { success: false, error: data.stderr };
    }

    return {
      success: true,
      output: data.stdout || "No output",
    };
  } catch (error) {
    return { success: false, error: `Failed to execute code: ${error.message}` };
  }
}