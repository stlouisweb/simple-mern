#!/bin/bash
npm run buildServer
echo "BUILT SERVER"
npm run buildClient
echo "BUILT CLIENT"
if [ -d "./dist/client" ]; then
  echo "dist/client DIRECTORY EXISTS"
  echo "REMOVING dist/client DIRECTORY"
  rm -rf ./dist/client
  mkdir ./dist/client
  cp -r ./client/build/. ./dist/client
fi
if [ ! -d "./dist/client" ]; then
  echo "DIRECTORY dist/client DOESN'T EXIST"
  mkdir ./dist/client
  cp -r ./client/build/. ./dist/client
fi
echo "COPIED dist/client"

echo "type 'node dist' to run server."
