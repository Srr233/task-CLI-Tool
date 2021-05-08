# Caesar cipher.
[Wikipedia](https://en.wikipedia.org/wiki/Caesar_cipher)

## To begin use the program you should use terminal.

### Properties of console arguments:
1. action: -a / --action should be "encode" or "decode".
   the argument is required.
2. shift: -s / --shift should be a number.
   the argument is required.
3. input: -i / --input should be a path to current file.
   the argument is NOT required.
4. output: -o / --output should be a path to current output file (if the file doesn't exist it will be existing).
  the argument is NOT required.

* To use your console as input you should NOT write input argument.

### Usage example:

### -a (--action) is encode
```
$ node index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
input.txt This is secret. Message about "_" symbol!

output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!
***
```
$ node index.js --action encode --shift 7 --input plain.txt --output encoded.txt
```
plain.txt This is secret. Message about "_" symbol!

encoded.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!
***
### -a (--action) is decode
Decoding encoded initial string with the same -s(--shift) number produces the initial string.
```
$ node index.js --action decode --shift 7 --input encoded.txt --output plain.txt
```
encoded.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!

plain.txt This is secret. Message about "_" symbol!
***
Negative shift handling
```
$ node index.js --action encode --shift -1 --input plain.txt --output encoded.txt
```
plain.txt This is secret. Message about "_" symbol!

encoded.txt Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!

### Or you can use without input and output
```
$ node index.js --action encode --shift -1
```
In that case program gives you allow using the terminal and seeing result at the meantime!
***
Have fun!

Made from Srr233 (Sergey)