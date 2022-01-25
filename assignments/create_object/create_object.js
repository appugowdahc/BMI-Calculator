function CreateObject(arr) {
    // Write your code here
    var dict={};
    /*arr.forEach(element => {
        var key = element.split(' ')[0];
        var value = element.split(' ')[1];
        dict[key]=value;
        
    });*/
    for(var i=0;i<arr.lenght;i=i+2){
        var key = arr[i]
        var value = arr[i+1]
        dict[key]=value;
    }
    return dict
}

module.exports = CreateObject;
