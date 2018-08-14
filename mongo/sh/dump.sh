#!/bin/bash

mongodump --db $DB_NAME --out /data/sh
tar -zcvf $DB_NAME.tar.gz $DB_NAME/
rm -r /data/sh/$DB_NAME
