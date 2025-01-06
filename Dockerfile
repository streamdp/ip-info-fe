FROM busybox:stable
RUN adduser -D static
USER static
WORKDIR /home/static
COPY ./static/ .
CMD ["busybox", "httpd", "-f", "-v", "-p", "80"]