

//Ammonia
var array = [.01, 4, 5, 6, 8, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 40, 
    45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 
    110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 
    210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 
    320, 340, 360, 374.14];

var contains = function(needle) {
    // Per spec, the way to identify NaN is that it is not equal to itself
    var findNaN = needle !== needle;
    var indexOf;

    if(!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(needle) {
            var i = -1, index = -1;

            for(i = 0; i < this.length; i++) {
                var item = this[i];

                if((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};

 function interp (param) {
    var bn = 0;
    var cn = 0;
    console.log(param)
    if (param< array[0] || param > array[array.length-1]) 
    {console.log('Choose another table')}
    else if (contains.call(array, param)) {
        console.log('the parameter is the same as input' + param)
        return [param]
    }
    else {
    for (var i= 0; i<array.length; i++) {
        if (i === 0){
            let a = array[i];
            let b = array[i+1];
            let c =array[i+2];
            let x = Math.abs(param - a);
            let y = Math.abs(param - b);
            let z = Math.abs(param - c);
            if (x<z) {
                console.log('the parameter are '+ a + ' and ' + b)
                return [a,b]}
            else {
                i += 2
                bn = [y,b];
                cn = [z,c];
            }
        } else {
            let a = array[i];
            let x = Math.abs(param-a);
            if (bn[0] < x) {
                console.log('the parameter are '+ bn[1] + ' and ' + cn[1])
                return [bn[1], cn[1]]}
            else if (i === (array.length -1) && bn[0] > x) {
                console.log('the parameter are '+ cn[1] + ' and ' + a)
                return [cn[1], a]}
            else {
                bn = [cn[0], cn[1]];
                cn = [x, a];
            }
        }
    }
}
}


module.exports.interp = interp;

