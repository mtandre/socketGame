login
```
#!shell
ssh [me]@104.236.32.201
cd chat-example
```
start node manager service, index on port 8080
```
#!shell
pm2 start index.js
```
(optionally - for reboot issues)
```
#!shell
pm2 startup ubuntu
```
start nginx on mtandre.com
```
#!shell
sudo service nginx restart
```
stop nginx on mtandre.com
```
#!shell
sudo service stop nginx
```