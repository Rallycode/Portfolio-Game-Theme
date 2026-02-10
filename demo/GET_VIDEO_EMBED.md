# How to Get Embedded Video in README

GitHub doesn't support HTML5 `<video>` tags in README files. To get a playable video embedded in your README, follow these steps:

## Steps to Get Embedded Video:

1. **Go to your GitHub repository**: https://github.com/Rallycode/Portfolio-Game-Theme

2. **Create a new Issue** (you can close it immediately after):
   - Click "Issues" tab
   - Click "New Issue"
   - Don't fill anything, just drag and drop your video file (`20260210-1622-13.5774142.mp4`) into the issue description box
   - GitHub will upload it and generate a link like: `https://github.com/user-attachments/assets/xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

3. **Copy the generated link** (it will look like):
   ```
   https://github.com/user-attachments/assets/xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   ```

4. **Update README.md** with this format:
   ```markdown
   ## 🎥 Demo Video
   
   Watch the demo video to see the portfolio in action:
   
   https://github.com/user-attachments/assets/YOUR-ASSET-ID-HERE
   ```

5. **Close the issue** (you don't need to keep it open)

The video will then be playable directly in your README!

---

**Current Status:** The video file is in `demo/20260210-1622-13.5774142.mp4` but needs to be uploaded via GitHub Issues to get the embed link.
