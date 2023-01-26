import * as core from "@actions/core";

void run();

async function run(): Promise<void> {
  runIndex()
    .then((res) => {
      if (res instanceof Error) {
        core.setFailed(res.message);
      }
    })
    .catch((err) => {
      core.setFailed(`internal error: ${err.message}`);
    });
}

async function runIndex(): Promise<null | Error> {
  const secret = core.getInput("secret");
  if (secret === "") {
    return Error("input `secret` was not provided");
  }

  const dir = core.getInput("dir");
  if (dir === "") {
    return Error("input `dir` was not provided");
  }

  const token = core.getInput("github_token");
  if (token === "") {
    core.warning("input `github_token` unset, GitHub may throttle you");
  }

  return null;
}
