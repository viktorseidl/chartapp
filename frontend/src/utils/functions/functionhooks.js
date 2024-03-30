import { md5 } from "node-forge";

export function stringToUuid(str){
    str=md5.create().update(str.toString()).digest().toHex()
    str = str.replace('-', '');
    return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, function(c, p) {
      return str[p % str.length]; 
    });
  }