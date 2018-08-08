#!/bin/bash

mongodump --db garage --out /data/sh
tar -zcvf garage.tar.gz garage/
rm -r /data/sh/garage
