## ING-AU-Scripts

[![](https://img.shields.io/docker/automated/porjo/ing-au-scripts.svg)](https://img.shields.io/github/workflow/status/porjo/ing-au-scripts/Build%20and%20Publish)


Scripts for fetching transaction listing for an ING Australia account.

Requires [Browserless](https://github.com/browserless/chrome) instance for running puppeteer.

Usage:

```sh
# Run browserless instance in 'ing' network with name 'puppeteer'
$ docker run -d --net ing --name puppeteer docker.io/browserless/chrome

# Run scripts container in 'ing' network. Volume mount current dir to 'scripts' folder. Pass script name to run as argument
$ docker run --rm -it --net ing --name scripts -v .:/home/node/scripts:Z ghcr.io/porjo/ing-au-scripts:master scripts/test.ts
[output CSV]
```

Thanks to https://github.com/adamroyle/ing-au-login
