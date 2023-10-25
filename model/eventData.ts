import { Genre } from "~/model/genre";
import { Place } from "~/model/place";

export interface EventData {
  id: number;
  event_name: string;
  event_genre: Genre;
  event_description: string;
  org_name: string;
  org_description: string;
  x_id: string;
  instagram_id: string;
  facebook_id: string;
  place_id: Place;
  place_name: string;
  website: string;
  activity_images: number;
}
