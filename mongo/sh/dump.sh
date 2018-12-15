#!/bin/bash

mongodump --db $DATABASE_NAME --out /data/sh
tar -zcvf $DATABASE_NAME.tar.gz $DATABASE_NAME/
rm -r /data/sh/$DATABASE_NAME
