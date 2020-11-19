#!/bin/sh

NODE_VERSION=14.15.1
YARN_VERSION=1.22.10

apk upgrade --no-cache

apk add --no-cache libstdc++

apk add --no-cache --virtual .build-deps curl gnupg

curl -fsSLO --compressed "https://unofficial-builds.nodejs.org/download/release/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64-musl.tar.xz"
curl -fsSLO --compressed "https://unofficial-builds.nodejs.org/download/release/v$NODE_VERSION/SHASUMS256.txt"
grep " node-v$NODE_VERSION-linux-x64-musl.tar.xz\$" SHASUMS256.txt | sha256sum -c - && tar -xJf "node-v$NODE_VERSION-linux-x64-musl.tar.xz" -C /usr/local --strip-components=1 --no-same-owner && ln -s /usr/local/bin/node /usr/local/bin/nodejs

for key in 6A010C5166006599AA17F08146C2130DFD2497F5
do
  gpg --batch --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys "$key" || \
  gpg --batch --keyserver hkp://ipv4.pool.sks-keyservers.net --recv-keys "$key" || \
  gpg --batch --keyserver hkp://pgp.mit.edu:80 --recv-keys "$key"
done

curl -fsSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz"
curl -fsSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz.asc"
gpg --batch --verify yarn-v$YARN_VERSION.tar.gz.asc yarn-v$YARN_VERSION.tar.gz
mkdir -p /opt
tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/
ln -s /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn
ln -s /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg

apk del .build-deps

rm -rf \
  "node-v$NODE_VERSION-linux-x64-musl.tar.xz" \
  SHASUMS256.txt \
  "yarn-v$YARN_VERSION.tar.gz.asc" \
  "yarn-v$YARN_VERSION.tar.gz" \
  /tmp/* \
  && { rm -rf /root/.gnupg || true; }

echo "NodeJS version: $(node --version)"
echo "NPM version: v$(npm --version)"
echo "YARN version: v$(yarn --version)"
