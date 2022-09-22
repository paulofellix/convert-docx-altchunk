# Convert docx altchunk content to normal docx content


## Description

Utility to convert docx altchunk to normal docx content, using a java library (docx4j)

## Requirements

Java 11+ (JDK or JRE)

## Installation
```shell
npm install convert-altchunk
or
yarn add convert-altchunk
```

## Usage

```
import { convertAltchunk } from 'convert-altchunk'
const res = await convertAltchunk('/some/path/to/output_converted.docx', '/some/path/to/output_converted.docx')
```

## Acknowledgment
[docx4j-ImportXHTML Java Example
](https://github.com/plutext/docx4j-ImportXHTML/blob/master/src/samples/java/org/docx4j/samples/ConvertAltChunks.java#L28)

## Contributing
1. Fork it (https://github.com/paulofellix/convert-altchunk/fork)
2. Create your feature branch (git checkout -b feature/fooBar)
3. Commit your changes (git commit -am 'Add some fooBar')
4. Push to the branch (git push origin feature/fooBar)
5. 5 .Create a new Pull Request