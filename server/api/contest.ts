import axios from "axios";

let rankingData: any = null;

let updatedTime = 0;

const contest_url = useRuntimeConfig().contestDataUrl;
if (!contest_url) {
  console.error("CONTEST_DATA_URL is not configured");
}

export default defineEventHandler(async (event) => {
  if (!contest_url) {
    return {};
  }
  const timeNow = Date.now();
  if (!rankingData) {
    await execUpdate();
    updatedTime = timeNow;
    return {
      message: "Contest data is not ready",
    };
  }
  if (timeNow - updatedTime > 1000 * 60) {
    updatedTime = timeNow;
    execUpdate();
    return rankingData;
  }
});

async function execUpdate() {
  console.log("Fetching contest data");
  console.log(contest_url);
  const resp = await axios.get(contest_url).catch(() => null);
  if (!resp) {
    console.error("Failed to fetch contest data");
    return {
      message: "Contest data is not ready",
    };
  }
  console.log("Contest data updated");
  console.log("resp.data", resp.data);
  console.log("rankingData", rankingData);
  if (!rankingData.UPDATED) {
    rankingData = {
      message: "Contest data is not ready",
    };
  } else {
    rankingData = resp.data;
  }
}

execUpdate();
