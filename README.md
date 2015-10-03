# Ember Multi App

## Warning
This pattern is not formally sanctioned by the ember-cli. It's possible future ember-cli changes could break this causing you a painful upgrade. I will do my best to keep this up to date.

## Overview
This repository demonstrates a pattern for structuring multiple ember-cli apps that share some common code (such as models, components, etc).

### Why?
At [Batterii](http://batterii.com) we have multiple ember apps that share common code. These apps are separated because they are different apps, serving different purposes. They have different login pages, user home, settings, etc. But what they do share is components, models, helpers, some base services and mixins, and a few other things.

If you're thinking about using this pattern for performance or isolate/break up your codebase, I would urge you to hold out for [Engines](https://github.com/emberjs/rfcs/pull/10).

## Details

### Summary

The pattern demonstrated by this repo is essentially multiple concurrent ember-cli based applications. These applications make use of a "local ember-addon" mechanism and a symlink. Each app exists independantly of the others, they just share common code. When developing you'll use multiple to servers (one per app). When building the script will trigger multiple `ember build` calls (one per app) and smash the builds together into a single dist (there is no conflict concern since the files will be fingerprinted).

### Outline of configurations.
You can use this section if you want to duplicate this setup without having to clone this repo.

* "apps/common" is symlinked to "apps/app1/lib/common" and "apps/app2/lib/common".
* "apps/app1/package.json" and "apps/app2/package.json" include "lib/common" as a "ember-addon".
* "apps/common/package.json" has keywords for "ember-addon".
* "apps/common/app/styles/common.scss" imports all SASS files in the common directory.
  - "apps/app1/styles/app.scss" and "apps/app2/styles/app.scss" import "common.scss".
* **ALL** apps (app1 and app2) have the same `modulePrefix` set in "config/environment.js".
  - All ES2015 imports use "app" as the prefix, even in "common". Eg: `Import CommonAppMixin from "app/mixins/common";`
* Each app is configured with a different port (see: "apps/app1/.ember-cli" and "apps/app2/.ember-cli")
* "apps/common/tests/integration" and "apps/common/tests/unit" are symlinked to "apps/app1/tests/common-integration" and "apps/app1/tests/common-unit" respectfully.

## Using repo

### Installing

  `./bin/install.sh`

### Running server

  `./bin/serve-app1.sh` [localhost:4200](http://localhost:4200)

  `./bin/serve-app2.sh` [localhost:4300](http://localhost:4300)

Each server runs on a different port so you can launch multiple at the same time.

### Testing

You'll notice that there are "apps/common/tests/integration" and "apps/common/tests/unit". These tests relate to the code in the common addon, though due to ember-cli structure, they are not able to run independantly. So you'll find two additional symlinks in "apps/app1/test" for "common-integration" and "common-unit".

Thus common tests get lumped into the first app.

  `./bin/test.sh`

  -- or --

  `./bin/server-app1.sh` and [localhost:4200/tests](http://localhost:4200/tests)

### Building

  `./bin/build.sh`

**Note:** you may need to tweak the build script to match your deployment needs. Right now each app will build to an "`app_name`.html" file (eg "app1.html").

### Adding another app
  * `cd apps && ember init app3`
  * `mkdir app3/lib && cd app3/lib && ln -s ../../common .`
  * Edit "app3/package.json", adding the following (see app1/package.json as example):
  * Edit "app3/.ember-cli" and bump the port number
  * Copy "bin/serve-app1.sh" to "bin/serve-app3.sh"
  * Edit "bin/install.sh", "bin/build.sh", "bin/test.sh", and "bin/serve-app3.sh". Updates should be obvious.

  ```"ember-addon": { "paths": [ "lib/common" ]}```

## Pattern Caveats
* Each app has it's own `bower.json`, `package.json` and `ember-cli-build.js` file.
  - This isn't necessarily a caveat, but it does mean if you add a dependency to the common addon, it will need to be added and imported to each app's config files.
* Multiple Servers
  - You will have to start multiple servers when developing on more that one app at a time.
* All apps must share the same name
  - As mentioned above, all apps must have the same `modulePrefix`.
* WatchMan
  - You will not be able to use watchman. It has an existing bug that prevents it from properly following symlinks. See: http://www.ember-cli.com/user-guide/#watchman for uninstall details.
* Tests for common need to run as part of one of your apps. They cannot be easily run independantly.
