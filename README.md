## IP location service frontend
[![Website ip-info.oncook.top](https://img.shields.io/website-up-down-green-red/https/ip-info.oncook.top.svg)](https://ip-info.oncook.top)

Simple frontend for the [ip-info](https://github.com/streamdp/ip-info) service written with [htmx](https://htmx.org/). 
Provides information about the client's IP address and also gives you the ability to get
information about any IP address you want.

### Build and run
You could build docker container and run it:
```shell
$ docker build -t static:latest .
$ docker run -it --rm --init -p 80:80 static:latest
```
or use simple compose file, such like that one:
```shell
version: "3.5"
services:
  ip-info-fe:
    image: streamdp/ip-info-fe:v0.0.1
    container_name: ip-info-fe
    ports:
      - "80:80"
    restart: always
```
and run this with the following command:
```shell
$ docker-compose up -d
```
### Screenshot
<div style="align-content: center" style="width: 100%">
   <img style="width: 75%" src="assets/index.png" alt="ip location service screenshot">
</div>

## Contributing
Contributions are welcome! If you encounter any issues, have suggestions for new features, or want to improve **ip-info-fe**, please feel free to open an issue or submit a pull request on the project's GitHub repository.

## License
**ip-info-fe** is released under the _Apache 2.0_ License. See the [LICENSE](https://github.com/streamdp/ip-info-fe/blob/main/LICENSE) file for complete license details.

### Support project
[DigitalOcean](https://www.digitalocean.com/?refcode=253bf19488bd&utm_campaign=Referral_Invite&utm_medium=Referral_Program) referral link.