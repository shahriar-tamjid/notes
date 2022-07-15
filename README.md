# Git and GitHub

### 1. Create a GitHub Repository on "github.com" --> This is called Remote Repository.
### 2. Copy the Repository URL.
### 3. Create Local Repository in the Project Folder by typing:
```bash
shahriar-tamjid@GIT:~$ git init
```
### 4. Check the status of Repository by typing:
```bash
shahriar-tamjid@GIT:~$ git status
```
### 5. Commit all the changes to the files by typing:
```bash
shahriar-tamjid@GIT:~$ git add .
shahriar-tamjid@GIT:~$ git commit -m "User Message"
```
### 6. Rename the Default Branch to "main"
#### Here in the Git the default branch is named as "master" and in GitHub when you create a repository then they provide a default branch named "main". So, at the very begining rename that "main" branch into anything (for example: abc) then go to the local repository and run:
```bash
shahriar-tamjid@GIT:~$ git branch -M main
```
#### This will rename that "master" into "main"
### 7. Then add the Remote Repository to the Local Repository by typing:
```bash
shahriar-tamjid@GIT:~$ git remote add origin <Repository URL>
```
### 8. Then push that "main" branch of Local Repository to the Remote Repository by typing:
```bash
shahriar-tamjid@GIT:~$ git push -u origin main
```
### 9. That is it for creating a repository and pushing code to it.
### 10. If there are changes made in our remote repository from another place we need to update our local repository with that change. This process is called "Pull" in Git.
### 11. To perform a pull process we need to fetch the changes first by typing:
```bash
shahriar-tamjid@GIT:~$ git fetch origin main
```
### 12. Then we need to merge those changes into our local repository by typing:
```bash
shahriar-tamjid@GIT:~$ git merge origin/main
```
### 13. That's how we can pull changes from a remote repository.