#!/usr/bin/env bash
cd /home/ubuntu/build
sudo nohup java -jar stackOverFlow_Clone-0.0.1-SNAPSHOT.jar 1>stdout.txt 2>stderr.txt &
sudo chmod 755 stdout.txt
