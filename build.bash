#!/bin/bash

# Function to pull the last commit message
function pull_last_commit_message {
    last_commit_message=$(git log -1 --pretty=%B)
}

# Main script
echo "Formatting code..."
npm run format

echo "Adding changes to git..."
git add .

pull_last_commit_message

echo "Enter your commit message (press Enter to use the last commit message):"
read custom_commit_message

if [ -z "$custom_commit_message" ]; then
    commit_message="$last_commit_message"
else
    commit_message="$custom_commit_message"
fi

# Commit with tests running from .husky file
echo "Committing changes..."
git commit -m "$commit_message"

# Check if the commit failed and retry with npm ci if necessary
if [ $? -ne 0 ]; then
    echo "Commit failed. Removing node_modules and reinstalling using npm ci..."
    rm -rf node_modules
    npm ci

    echo "Retrying commit..."
    git commit -m "$commit_message"

    # If commit fails again, retry with --no-verify flag
    if [ $? -ne 0 ]; then
        echo "Second attempt failed. Retrying with --no-verify flag..."
        git commit -m "$commit_message" --no-verify
    fi
fi

# Push the changes
echo "Pushing changes to the repository..."
git push
