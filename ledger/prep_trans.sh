#!/bin/bash
#
# Make ING transaction file CSV suitable for https://github.com/howeyc/ledger import e.g.
#  $ ./ledger -f ledger.dat import --neg --date-format "02/01/2006" Paywave trans.csv >> ledger.dat

[ $# -ne 1 ] && echo "Usage $0 <transaciton.csv>" && exit

cat $1 | sed 's/^Date,/Transaction Date,/' | sed 's/Credit,Debit/Amount/' | sed 's/,,/,/g'
