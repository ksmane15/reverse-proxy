# NGINX as a reverse-proxy using Docker


**Building All Images**

*cd nginx/*

```
Docker image build -t nginx_rp .
```

*cd app1/*

```
Docker image build -t app1 .
```

*cd app2/*

```
Docker image build -t app2 .
```
----------

**Create a network**
```
docker network create rp_network
```


**Running All containers**

```
docker container run -d -p 80:80 --name rp_container --network rp_network nginx_rp
```

```
docker container run -d --name app1_container -p 5001:5001 --network rp_network app1
```

```
docker container run -d --name app2_container -p 5002:5002 --network rp_network app2
```

Following routes are available for testing
- localhost/app1/app1/home
- localhost/app2/app2/home
