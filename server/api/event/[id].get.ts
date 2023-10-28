import * as events from "~/assets/data/events.json";

export default defineEventHandler((event) => {
  const id = getRouterParam(event, "id");
  if (id === undefined) {
    return {};
  }
  // convert to number, throw error if failed
  if (Number.isNaN(id)) {
    throw new Error("id is not a number");
  }
  const idNumber = Number(id);
  return events.find((e) => e.id === idNumber);
});
