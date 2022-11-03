#!/bin/bash
cd /home/ubuntu/build

ps -ef | grep "stackOverFlow_Clone-0.0.1-SNAPSHOT.jar" | grep -v grep | awk '{print $2}' | xargs kill -9 2> /dev/null

if [ $? -eq 0 ];then
	echo "application Stop Success"
else
	echo "application Not Running"
fi

echo "application start!"
echo $1
nohup java -jar stackOverFlow_Clone-0.0.1-SNAPSHOT.jar 1>stdout.txt 2>stderr.txt &