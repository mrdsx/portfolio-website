import { getCDNImageURL } from "@/lib/utils";

const IMG_HEIGHT = 200;
const wordGameImage = getCDNImageURL("word-game_ltuhmb", IMG_HEIGHT);
const swiftTrackerImage = getCDNImageURL("swift-tracker_guijc3", IMG_HEIGHT);
const ovioImage = getCDNImageURL("ovio_irqhyp", IMG_HEIGHT);
const portfolioImage = getCDNImageURL("portfolio-website_r0cuwy", IMG_HEIGHT);

export { ovioImage, portfolioImage, swiftTrackerImage, wordGameImage };
