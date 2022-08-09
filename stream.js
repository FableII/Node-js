const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./test.txt');
const writeStream = fs.createWriteStream('./newtext.txt');
const compressStream = zlib.createGzip();


/* readStream.on('data', (chunk) => {
   writeStream.write('\n-----START-----\n');
   writeStream.write(chunk);
   writeStream.write('\n-----END-----\n');
}) */

const handleError = () => {
    console.log('Error');
    readStream.destroy();
    writeStream.end('Finished with the error...');
}


readStream
.on('error', handleError)
.pipe(compressStream)
.pipe(writeStream)
.on('error', handleError);