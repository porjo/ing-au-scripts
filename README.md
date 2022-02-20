Scripts for fetchng transaction listing for an ING Australia account.

Requires Browserless instance for running puppeteer.

Usage:

```
# Run browserless instance in 'ing' network with name 'puppeteer'
$ docker run -d --net ing --name puppeteer docker.io/browserless/chrome

$ git clone github.com/porjo/ing-au-scripts
$ cd ing-au-scripts
# Run scripts container in 'ing' network
$ docker run --rm -it --net ing --name scripts -v .:/home/node/scripts:Z ing-scripts /bin/bash
node@5d6ffab392cc:~/$ cd ing-scripts
# Modify test.ts as required, then run...
node@5d6ffab392cc:~/ing-scripts$ ts-node test.ts
[output CSV]
```

Thanks to https://github.com/adamroyle/ing-au-login
