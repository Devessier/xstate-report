#!/usr/bin/env bash

npm run preview &

until $(curl --output /dev/null --silent --head --fail http://localhost:3000); do
    printf '.'
    sleep 5
done

echo 'Server is listening';

node ./build-report.js --production

git add .
git commit -m "chore: generate report"
git push

kill $!
