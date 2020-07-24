# Mozilla Voice DevTools

The Mozilla Voice DevTools website will be hosted at https://voice.mozilla.org, and will showcase open voice tech projects at Mozilla. 

## Local development

This site is developed using [Jekyll](https://jekyllrb.com/), a static site generated that can be extended to create blogging functionality. In order to develop locally, first make sure you have a [Ruby dev environment](https://jekyllrb.com/docs/installation/) set up. 

The Ruby bundler is required to run this project. Once you have your Ruby environment, install the Ruby bundler: 

```gem install bundler```

Install Gems required to compile project: 

```bundle install```

Run `bundle exec jekyll serve` to develop on localhost, and the site will be available at `http://localhost:4000`.

## Build 
Once completed run `bundle exec jekyll build` to build in production mode. The statically-generated site contents will be in the `_site` folder, which can be uploaded to the server or deployed using Github Pages. 

The `config.yml` file contains important information, such the baseurl and url of the website.

images/ folder contains all sliced images for the site.
