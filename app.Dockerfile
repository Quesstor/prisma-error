FROM ubuntu:latest
RUN apt-get update && \
    apt-get upgrade -y && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs zip

WORKDIR /home/app
RUN chmod -R 777 /root
RUN chmod -R 777 /tmp
ENV PATH /home/app/node_modules/.bin:$PATH
