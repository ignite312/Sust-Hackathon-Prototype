1. **Identify the Commit You Want to Cancel:**
   - Use `git log` to find the commit hash or message of the commit you want to cancel.

2. **Reset HEAD to the Commit Before the One You Want to Cancel:**
   - Run `git reset HEAD~` to move HEAD back one commit.
   - If you want to cancel multiple commits, run `git reset HEAD~<n>`, where `<n>` is the number of commits you want to cancel.

3. **Stage the Changes:**
   - Use `git add .` to stage all the changes in your working directory.

4. **Commit the Changes:**
   - Run `git commit -m "Cancelling previous commit"` to create a new commit that cancels the previous one.

5. **Push the Changes to the Remote Repository (Optional):**
   - If you're working on a remote repository, you can push the changes to the remote server using `git push`.