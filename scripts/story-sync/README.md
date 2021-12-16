# Story Sync

This script is used to compare and sync the v3 and v4 stories during migration. Currently v4 stories just export everything from their v3 equivalents but override the name.

You can run the scripts using:

`yarn workspace story-sync compare` to check if v3 and v4 stories are in sync, and warn if not.

and

`yarn workspace story-sync sync` to sync the stories between v3 and v4.