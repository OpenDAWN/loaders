

<!-- Start ./src/index.js -->

written in ECMAscript 6

## _

Author: Samuel Goldszmidt

Version: 0.1.1

## throwIfMissing()

Gets called if a parameter is missing and the expression
specifying the default value is evaluated.

## Loader

## constructor([responseType=""])

### Params: 

* **string** *[responseType=""]* - responseType's value, "text" (equal to ""), "arraybuffer", "blob", "document" or "json"

## load(fileURLs)

Method for a promise based file loading.
Internally switch between loadOne and loadAll.

### Params: 

* **(string|string[])** *fileURLs* - The URL(s) of the files to load. Accepts a URL pointing to the file location or an array of URLs.

## loadOne(fileURL)

Load a single file

### Params: 

* **string** *fileURL* - The URL of the file to load.

## loadAll(fileURLs)

Load all files at once in a single array and return a Promise

### Params: 

* **string[]** *fileURLs* - The URLs array of the files to load.

## fileLoadingRequest(url, [index])

Load a file asynchronously, return a Promise.

### Params: 

* **string** *url* - The URL of the file to load
* **string** *[index]* - The index of the file in the array of files to load

Get the callback function to get the progress of file loading process.
This is only for the file loading progress as decodeAudioData doesn't
expose a decode progress value.

Set the callback function to get the progress of file loading process.
This is only for the file loading progress as decodeAudioData doesn't
expose a decode progress value.

### Params: 

* **Loader~progressCallback** *callback* - The callback that handles the response.

## AudioBufferLoader

## constructor()

## load(fileURLs, number}})

Method for promise audio file loading and decoding.

### Params: 

* **(string|string[])** *fileURLs* - The URL(s) of the audio files to load. Accepts a URL pointing to the file location or an array of URLs.
* **wrapAroundExtension:** *number}}* [options] - Object with a wrapAroundExtension key which set the length, in seconds to be copied from the begining at the end of the returned AudioBuffer

## loadOne(fileURL)

Load a single audio file, decode it in an AudioBuffer, return a Promise

### Params: 

* **string** *fileURL* - The URL of the audio file location to load.

## loadAll(fileURLs)

Load all audio files at once in a single array, decode them in an array of AudioBuffers, and return a Promise.

### Params: 

* **string[]** *fileURLs* - The URLs array of the audio files to load.

## decodeAudioData(-)

Decode Audio Data, return a Promise

### Params: 

* **arraybuffer** *-* The arraybuffer of the loaded audio file to be decoded.

## __wrapAround()

WrapAround, copy the begining input buffer to the end of an output buffer

## SuperLoader

## constructor()

## load(fileURLs, number}})

Method for promise audio and json file loading (and decoding for audio).

### Params: 

* **(string|string[])** *fileURLs* - The URL(s) of the files to load. Accepts a URL pointing to the file location or an array of URLs.
* **wrapAroundExtension:** *number}}* [options] - Object with a wrapAroundExtension key which set the length, in seconds to be copied from the begining at the end of the returned AudioBuffer

<!-- End ./src/index.js -->

