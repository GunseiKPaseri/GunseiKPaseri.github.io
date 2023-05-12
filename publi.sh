#! /bin/bash

git push origin dev

git push -f --delete origin master

git subtree push --prefix dist/ origin master

git checkout dev
