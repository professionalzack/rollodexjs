# Create Heroku Application

1. Go to the [Heroku apps dashboard](https://dashboard.heroku.com/apps)
1. Click **Create** -> **New App**
1. Give it a unique name
1. Go to the **Resources** tab and add mLab MongoDB as an add-on
1. Go to the **Settings** tab and add the required ENV values
    - Skip the mongo values, those are automatically added by [mLab](https://mlab.com/)
1. Go to **Deploy** and hook it up to yout GitHub repository
1. Manually deploy
1. Go to **Resources* again
1. Enable the `web worker` dyno
1. (option) Add [Papertrail](https://www.papertrail.com/) if you want better logging
