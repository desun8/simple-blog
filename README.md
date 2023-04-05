### Lost-pixel
**Relevant to Mac**

Possible problem with local startup (noticed at `lost-pixel@3.2.0`). 

The error (`browserType.launch`) is that `lost-pixel` refers to an old version of Chrome (`chromium-1041`) in Playwright. 

To resolve the issue, please try creating the missing directory `/Users/{username}/Library/Caches/ms-playwright/`, and copying the contents of the latest version of Chrome folder available (e.g. `chromium-1055`) into the newly created directory.
 x