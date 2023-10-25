import JSZip from "jszip";
import Papa from "papaparse";
import { EventData } from "~/model/eventData";

let events_data: EventData[] = [];

export async function useDataLoader() {
  if (events_data.length > 0) return { events_data };
  events_data = await (async function (): Promise<EventData[]> {
    const downloaded_data: EventData[] = [];
    try {
      const zip_data = await fetch("/data/events.zip").then((res) =>
        res.blob(),
      );
      const zip = await JSZip.loadAsync(zip_data);
      const fileNames = Object.keys(zip.files);

      // CSVファイル名を見つける（プロジェクトに応じて調整）
      const csvFileName = fileNames.find((name) => name.endsWith(".csv"));

      if (!csvFileName) throw new Error("CSV file not found in the zip.");

      const csvFile = await zip.files[csvFileName].async("string");

      await Papa.parse(csvFile, {
        header: true, // 最初の行に列の名前があることを示す
        complete: function (results: any) {
          // `results.data` は解析されたデータオブジェクトの配列です。
          const csvData = results.data as any[];
          // iterate over the array of objects
          csvData.forEach((d) => {
            const event_data: EventData = {} as EventData;
            // id,e_name,e_desc,e_genre,o_name,o_desc,a_size,x_id,f_id,i_id,web
            event_data.id = d.id as number;
            event_data.event_name = d.e_name as string;
            event_data.event_description = d.e_desc as string;
            event_data.event_genre = d.e_genre as number;
            event_data.org_name = d.o_name as string;
            event_data.org_description = d.o_desc as string;
            event_data.activity_images = d.a_size as number;
            event_data.x_id = d.x_id as string;
            event_data.facebook_id = d.f_id as string;
            event_data.instagram_id = d.i_id as string;
            event_data.website = d.web as string;
            downloaded_data.push(event_data);
          });
        },
        error: function (error: Error) {
          console.error("Parsing error:", error);
        },
      });
    } catch (err) {}
    return downloaded_data;
  })();
  return { events_data };
}
