FROM jekyll/jekyll:pages

WORKDIR /srv/jekyll

COPY Gemfile jekyll-theme-conference.gemspec ./

RUN bundle install

VOLUME /srv/jekyll