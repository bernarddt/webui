uTorrent v2.2.1 compatible WebUI
================================

Introduction
------------
Since the original uTorrent project was bought over by the BitTorrent company, they started improving on the original design which is great in some cases. But they also added advertisements and other features that does not stay true to the original uTorrent simplistic design. Because of that a vast majority of old users have sticked to the last version before the takeover, which is v2.2.1.

Since the current WebUI is being developped to stay compatible with the most current v3.0+ uTorrent and also the BitTorrent Remote feature, the project seems to lose compatibility to the old uTorrent v2.2.1. BitTorrent does not provide any more support or updates for incompatibily with uTorrent v2.2.1.

This project was forked from the most current WebUI available, v0.380, on GitHub. This version is currently not running on v2.2.1. This is due to code dependancies on jQuery that is present on the BitTorrent Remote website proxy but not included in the GitHub project.

Notice that the version available for download from the BitTorrent website Forum is currently at version 0.388 and is actually in a working state of compatibiliy with the old uTorrent v2.2.1. This version's source is retrievable from the download but was zipped in various ways that make it harder to read, so it will not be used.

Goal of this Project
--------------------
This project has 3 goals:

### 1. Remove jQuery Dependancy

Since the current project code has a mixed dependancy on MooTools and jQuery, one needs to be chosen. The original WebUI was built with MooTools and a lot of the code is already compatible and stable using MooTools. jQuery was only added recently and some functions have been written to use it. Unfortunately jQuery was not intergrated gracefully and a few commits back MooTools was forced out by updates to encapsulating code. 

For the purpose of this project *MooTools* will be used.

### 2. Remove BitTorrent Remote (codenamed "falcon")

The current codebase of WebUI was heavily updated to allow the BitTorrent Remote feature to function properly, the addition of jQuery was also added to support the remote proxy server's encryption feature. Because the Remote feature does not work with the old v2.2.1, the changes will be removed. A lot of checks has been added in the WebUI source to determine if the WebUI is running through the Remote proxy and this code introduced a lot of bugs for user that don't use the Remote feature (expecially v.2.2.1 users)

### 3. Bug Fixes and Improvements true to v.2.2.1

This project will try to track changes to the original project that are compatible with the older v2.2.1 as well. This project will also focus on bugs that exist for uTorrent v2.2.1.

Q&A
---

1. Why not just use the copy of the project before the new updates?

A lot of bugs has been fixed during the addition of the new features. We don't want to lose those.

