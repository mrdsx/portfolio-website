import { getCDNImageURL } from "@/lib/utils";

const IMG_HEIGHT = 200;
const wordGameImage = getCDNImageURL("word-game_yfk0md", IMG_HEIGHT);
const swiftTrackerImage = getCDNImageURL("swift-tracker_ho3czs", IMG_HEIGHT);
const ovioImage = getCDNImageURL("ovio_irqhyp", IMG_HEIGHT);
const portfolioImage = getCDNImageURL("portfolio-website_mqlrqm", IMG_HEIGHT);

export { ovioImage, portfolioImage, swiftTrackerImage, wordGameImage };
