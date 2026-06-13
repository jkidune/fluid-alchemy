import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const cloudflareConfig = {
  ...defineCloudflareConfig(),
  buildCommand:
    "COPYFILE_DISABLE=1 npm run build && find .next .open-next -name '._*' -type f -delete",
};

export default cloudflareConfig;
