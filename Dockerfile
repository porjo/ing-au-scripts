FROM docker.io/library/node:12-slim

RUN apt-get update && apt-get upgrade

# Run everything after as non-privileged user.
USER node

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1
ENV PATH="${PATH}:~/node_modules/.bin"
WORKDIR /home/node

COPY --chown=node package.json /home/node
RUN npm i yarn
RUN yarn

CMD ["/bin/bash", "-c", "~/node_modules/.bin/ts-node"]
