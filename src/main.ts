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
  const secret = core.getInput("access-key");
  if (secret === "") {
    return Error("input `access-key` was not provided");
  }

  const token = core.getInput("github-token");
  if (token === "") {
    core.warning("input `github-token` unset, GitHub may throttle you");
  }

  const dir = core.getInput("dir");
  if (dir === "") {
    return Error("input `dir` was not provided");
  }

  return null;
}
