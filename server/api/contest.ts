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
    return rankingData;
  }
  if (timeNow - updatedTime > 1000 * 60) {
    updatedTime = timeNow;
    execUpdate();
    return rankingData;
  }
});

async function execUpdate() {
  console.log("Fetching contest data");
  const resp = await $fetch(contest_url).catch(() => null);
  if (!resp) {
    console.error("Failed to fetch contest data");
    return;
  }
  rankingData = resp;
  console.log("Contest data updated");
}

execUpdate();
