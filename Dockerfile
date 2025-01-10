FROM busybox:stable

WORKDIR /home/static

COPY ./static/ .

RUN gzip -kfq ./js/*.js
RUN gzip -kfq ./css/*.css

RUN adduser -D static
USER static

CMD ["busybox", "httpd", "-f", "-v", "-p", "80"]