#!/bin/bash

tar -zxvf garage.tar.gz
mongorestore --db garage garage
rm -rf garage
