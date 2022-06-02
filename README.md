# node_international_phone_codes
This repository have list of international phone codes

### Installing

Instruction for using this package
First install this package
```
npm install node_international_phone_codes
```

Declare the package in your application
```
const phoneCodes = require('node_international_phone_codes');
```


There are four functions in this package. You can use this function immediately after declaring the packages. These are example of functions that available within this package:

1. Get all phone codes using this codes:
```
phoneCodes.getAllPhoneCode();
```
2. Find Phone Code By Code example:
```
phoneCodes.findPhoneCodeByCode('+62');
```
3. Find Phone Code By Country Name example:
```
phoneCodes.findPhoneCodeByCountryName('Indonesia');
```
4. Find Phone Code By Country ID example:
```
phoneCodes.findPhoneCodeByCountryCode('ID');
```

## Running the tests
You can try it and see the result in the console.
```
console.log(JSON.stringify(phoneCodes.getAllPhoneCode()));
```

## Authors

* **Faisal** - *Github* - [vai21](https://github.com/vai21)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

Donate me a cup of coffee https://www.paypal.me/faisalrasid
