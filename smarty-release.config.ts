import { defineConfig } from "smarty-release";

export default defineConfig({
  increments: ["patch", "minor", "major"],
  tags: ["latest", "next"],
  git: {
    requireBranch: "main",
    commitMessage: "release: v${version}",
    tagName: "v${version}",
    changelog: {
      args: "-o --tag ${version}",
      template: "github",
      config: {
        remote: {
          // github: {
          //   owner: "smarty-release2",
          //   repo: "demo",
          // },
        },
      },
    },
    // changelog: false,
  },

  hooks: {
    "before:init": [
      "npm run test",
      async () => {
        console.log("w");
      },
    ],
    // "before:init": "pnpm test",
    // "before:init": "echo 已推送 v${version}",
    // "before:init": function ({ logger, version }) {
    //   logger.warn(version);
    //   logger.info("a");
    // },
    "before:selectVersion": ({ logger }) => {
      // logger.info("Before selecting version");
    },
    "after:selectVersion": ({ version, logger }) => {
      // logger.info(`after selecting version:${version}`);
    },
    "before:bump": (ctx) => {
      // ctx.cancel();
    },
    "after:bump": [
      async () => {
        console.log("after:bump");
      },
    ],
    "after:release": "echo 已推送 v${version} ",
  },
});
