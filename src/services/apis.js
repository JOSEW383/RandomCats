import { shortenSentence } from "./utils.js";

const ENDPOINT_CAT_FACT = "https://catfact.ninja/fact";
const ENDPOINT_CAT_IMAGE = "https://cataas.com/cat/gif/says/";
const CAT_IMAGE_TEXT_MAX_LENGTH = 20;

export async function getCatFact() {
  // return "Cats have about 130,000 hairs per square inch (20,155 hairs per square centimeter)."
  const response = await fetch(ENDPOINT_CAT_FACT);
  if (!response.ok) {
    throw new Exception("Error fetching catfact");
  }
  const responseJSON = await response.json();
  return responseJSON.fact;
}

export async function getCatImage(catFact) {
  // return "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg";
  const response = await fetch(
    ENDPOINT_CAT_IMAGE + shortenSentence(catFact, CAT_IMAGE_TEXT_MAX_LENGTH)
  );
  if (!response.ok) {
    throw new Exception("Error fetching catImage");
  }
  return response.url;
}
