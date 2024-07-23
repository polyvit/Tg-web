const TG_BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN
const TG_CHAT_ID = import.meta.env.VITE_TG_CHAT_ID
const API_URL = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`

export async function sendTgMethod(text: string) {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.description || "Что-то пошло не так");
  }
}
