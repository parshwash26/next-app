import axios from "axios";

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

if (!SLACK_WEBHOOK_URL) {
  throw new Error(
    "Please define the SLACK_WEBHOOK_URL environment variable inside .env.local"
  );
}

export const sendSlackNotification = async (message) => {
  try {
    await axios.post(SLACK_WEBHOOK_URL, { text: message });
  } catch (error) {
    console.error("Error sending Slack notification:", error);
  }
};
