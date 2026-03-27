import { execSync } from "node:child_process";
import packageJson from "../../package.json" with { type: "json" };

const pkg = packageJson.name;
const version = packageJson.version;

function run(command, options = {}) {
  return execSync(command, {
    stdio: ["ignore", "pipe", "pipe"],
    encoding: "utf8",
    ...options,
  }).trim();
}

let publishedVersion = null;

try {
  publishedVersion = run(`npm view ${pkg}@${version} version`);
} catch {
  publishedVersion = null;
}

if (publishedVersion === version) {
  console.log(`${pkg}@${version} is already published; skipping npm publish`);
  process.exit(0);
}

execSync("npm publish", { stdio: "inherit" });
