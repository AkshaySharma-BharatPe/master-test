import { assetChecker } from "./assetChecker";
import { bundleAnalyzer } from "./bundleAnanlyzer";

const main  = async() => {
  await assetChecker();
  await bundleAnalyzer();
}

main();