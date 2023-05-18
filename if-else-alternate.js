// alternate for this kind of if else conditions:
// if (sns.Trigger.Namespace == "AWS/ApiGateway") {
//     if (dimensionName('ApiId') && dimensionName('Stage')) {
//         var sns_DimensionsValue = dimensionValue('ApiId') + '_' + dimensionValue('Stage')
//     } else if (dimensionName('ApiName') &&  dimensionName('Stage')) {
//         var sns_DimensionsValue =  dimensionValue('ApiName') + '_' +  dimensionValue('Stage') 
//     } else if (dimensionName('ApiId')) {
//         var sns_DimensionsValue =  dimensionValue('ApiId')    
//     } else if (dimensionName('ApiName')) {
//         var sns_DimensionsValue =  dimensionValue('ApiName')    
//     }
//   }   
  
//   if (sns.Trigger.Namespace == "AWS/S3") {
//       var sns_DimensionsValue = dimensionValue('BucketName') + '_' + dimensionValue('StorageType')
//   }  


// If you want to go for something different, you could use arrays like this

// each nested array contains say [[obj.a, obj.b]] that corresponds to if (obj.a && obj.b) ,
// we can loop through this array and then filter out undefined (in the case where the object property doesn't exist)

// In the following example the first condition is [obj.a, obj.c], 
// which fails as the property c does not exist in obj and it will resolve to undefined,
// and the next condition is [obj.a, obj.b] which passes as both of them are valid in obj and will return
// the values joined by _


//   alternate

const obj = {
    a: 'al',
    b: 'bl'
}
const params = [[obj.a, obj.c], [obj.a, obj.b], [obj.b]];

let result;
for (let i = 0; i < params.length; i++) {
    const x = params[i];
    const value = x.filter(x => x != undefined).length == x.length ? x.join('_') : null;
    if (value) {
        result = value;
        break;
    }
}

console.log('Final variable value is -> ', result);