# Table of Contents
1. [Contributor Guidelines for Markdown-Previewer](#contributor-guidelines-for-markdown-previewer)
2. [Assigning an Issue](#assigning-an-issue)
3. [Contribution Process](#contribution-process)
    1. [Star ⭐ the repository](#1-star-⭐-the-repository)
    2. [Fork the repository](#2-fork-the-repository)
    3. [Cloning this repository](#3-cloning-this-repository)
    4. [Creating a New Branch](#4-creating-a-new-branch)
    5. [Navigate to the project directory](#5-navigate-to-the-project-directory)
    6. [Add a reference(remote) to the original repository](#6-add-a-reference-remote-to-the-original-repository)
    7. [Check the remotes for this repository](#7-check-the-remotes-for-this-repository)
    8. [Always take a pull from the upstream repository to your master branch](#8-always-take-a-pull-from-the-upstream-repository-to-your-master-branch)
    9. [Create a new branch](#9-create-a-new-branch)
    10. [Track your changes](#10-track-your-changes)
    11. [Commit your changes](#11-commit-your-changes)
    12. [Merge changes from master into your branch](#12-merge-changes-from-master-into-your-branch)
    13. [Push the committed changes in your feature branch to your remote repo](#13-push-the-committed-changes-in-your-feature-branch-to-your-remote-repo)
    14. [Creating a Pull Request (PR)](#14-creating-a-pull-request-pr)
    15. [Code Review](#15-code-review)
    16. [Merging](#16-merging)
    17. [Congratulations! 🎊](#17-congratulations-🎊)
    
# Contributor Guidelines for Markdown-Previewer

Thank you for your interest in contributing to Markdown-Previewer as part of Hacktoberfest! We greatly appreciate your contributions and want to ensure a smooth and efficient collaboration process. To maintain a structured workflow, please follow the guidelines outlined below.

### Assigning an Issue
- Before you start working on any feature or bug fix 🐞, check the Issues section to find a task or issue that interests you.
- If you find an issue you'd like to work on, please comment on the issue for assigning process. This will help avoid duplication of effort and let others know that you are actively working on it. Please do not raise PR or start working on the issue before assigned to you. 

## Contribution Process:-

### 1. Star ⭐ the repository
- First of all start this repository.

### 2. Fork the repository
- Then fork the repository.

### 3. Cloning this repository
- If you haven't already, fork the Markdown-Previewer repository to your GitHub account.
- Clone your forked repository to your local development environment:
```bash
git clone https://github.com/your-username/Markdown-Previewer.git
```



### 4. Creating a New Branch
- It's a good practice to create a new branch for each feature or bug fix you're working on. Use a descriptive name for your branch:
```bash
git checkout -b feature/your-feature-name
```

### 5. Navigate to the project directory.
```bash
cd Markdown-Previewer
```

### 6. Add a reference(remote) to the original repository.
```bash
git remote add upstream https://github.com/hirentimbadiya/Markdown-Previewer.git
```

### 7. Check the remotes for this repository.
```bash
git remote -v
```
### 8. Always take a pull from the upstream repository to your master branch to keep it at par with the main project (updated repository)..
```bash
git pull upstream master
```


### 9. Create a new branch.
```bash
git checkout -b username/issue_number 
```

### 10. Track your changes.
```bash
git add .
```

### 11.  Commit your changes.
```bash
git commit -m "<commit subject>"
```

### 12. While you are working on your branch, other developers may update the master branch with their branch. This action means your branch is now out of date with the master branch and missing content. So to fetch the new changes, follow along:
```bash
git checkout master
git fetch origin master
git merge upstream/master
git push origin
```
Now you need to merge the master branch into your branch. This can be done in the following way:
```bash
git checkout <your_branch_name>
git merge master
```

### 13. Push the committed changes in your feature branch to your remote repo.
```bash
git push -u origin <your_branch_name>
```

### 14. Creating a Pull Request (PR)
- Go to your forked repository on GitHub, and you should see a button to create a Pull Request. Click on it.
- Ensure your PR title and description are informative, describing the changes you made and referencing the issue if applicable.
- Submit the PR.

### 15. Code Review
- Our maintainers and other contributors will review your PR. Be prepared to make changes or address feedback as necessary.

### 16. Merging
- Once your PR is approved and passes any required checks, it will be merged into the main repository.

### 17. Congratulations! 🎊
- You've successfully contributed to Markdown-Previewer. Thank you for your valuable contribution.
