# sample_docker_rails

docker-compose template for rails5

Each branch ( `html`, `api` ) can be used.
Each commit message represents the executed command.

## to develop

```bash
git clone git@github.com:kawasin73/sample_docker_rails.git
cd sample_docker_rails
git checkout api
docker-compose up -d
```

### How to install new gem

1. Add gem to Gemfile
2. Exec `docker-compose exec spring bundle install`

### rails console?

1. Exec `docker-compose up -d spring`
2. Exec `docker-compose exec spring rails c`

### How to exec rails commands?

1. Exec `docker-compose up -d spring`
2. Exec `docker-compose exec spring rails (any commands)`

### to attach rails process for binding.pry

1. Exec `docker ps` and check the rails container name
2. Exec `docker attach "the container name you checked"`
