import { v4 as uuidv4 } from "uuid";

const SESSION_KEY = "chat_session_id";

export function getSessionId() {
  let sessionId = localStorage.getItem(SESSION_KEY);

  if (!sessionId) {
    sessionId = uuidv4();
    localStorage.setItem(SESSION_KEY, sessionId);
  }

  return sessionId;
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}