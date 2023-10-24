#!/bin/sh

# Generates models and TS types for the project.

cd ./public/assets/models

npx gltfjsx falcon-heavy.gltf -tT -o FalconHeavy.tsx -r /assets/models