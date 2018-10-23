# ThermoPal
This is a helper app utilizing react for the front-end and express with postgresql for the back-end. The focus of this app is to provide engineering students and professionals in the field, easy access to linear interpolation of the thermodynamic saturated steam tables. The steam tables are often a pivotal aspect in many applications regarding the transfer of energy with water as a medium. To use the steam tables however, often results in lengthy hand calculations in order to approximate the properties of water at a certain temperature. ThermoPal provides an interpolation service for steam tables and custom interpolations for unrelated data in two seperate tabs. The tabs remember the data calculated last, so switching between tabs does not result in the loss of data.

## Steam Table Tab
![thermopal_steam](https://user-images.githubusercontent.com/36170390/40401184-e1752a4a-5e0a-11e8-8369-d5cc8a693551.png)

This tab includes an area to input temperature and a drop down menu that lets the user select the water property they wish to interpolate. All units are in SI.

## Custom Interpolation Tab
![thermopal_custom](https://user-images.githubusercontent.com/36170390/40401766-a3f3f5f4-5e0d-11e8-9957-c14d7166775d.png)

## DataBase Schema
![steamtable](https://user-images.githubusercontent.com/36170390/40401967-cd13db92-5e0e-11e8-806a-34fe8ae6c3d9.png)

## Linear Interpolation Logic

In order to calculate the best approximation, the bounds used to interpolate must be as close as possible to the value given. The following function was used to: 
1. check if the exact value given is already present in the table
2. check if the value given is out of bounds of the maximum and minimum temperature provided by the table
3. provide the closest two property rows 

Bellow is a snapshot of the logic used. The key aspect is the use of a "pivot" point while looping through the possible temperatures. This will be elaborated on below

```javascript

    function interp (param) {

    //initialize bound variables that will be used in the "pivot" logic later in the code
    var bn = 0; 
    var cn = 0;
    if (param< array[0] || param > array[array.length-1]) //This is check#1: is value asked for already in the table?
    {console.log('Choose another table')}
    else if (contains.call(array, param)) {
        console.log('the parameter is the same as input' + param) //This is check#2: is the value in the min and mix range of the table?
        return [param]
    }
    else {
    for (var i= 0; i<array.length; i++) { 
    //Here the "array" used is a predefined array that includes a list of all the temperatures present in the steam table
    //The main reason for this is to avoid querying the database for every instance in the table, thus increasing calculation speed
        if (i === 0){
        //The first loop is used to start the "pivoting." By taking the first 3 values and checking the difference against the given value
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
                //Here the bounds are defined. 
                //These arrays accomplish two things: store the difference between the given value and the target value, 
                //and record the target value. 
                
            }
        } else {
            let a = array[i];
            let x = Math.abs(param-a);
            if (bn[0] < x) {
            //This conditional checks which difference between target and given is smaller, always selecting the smaller result
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

```

Essentially, the given value is subtracted from the closest numbers above and below its value. The resulting absolute difference is compared against other differnces that were taken from values either below or above the given temperature. If the absolute difference is smaller on a value originating below the given temperature the bounds pertaining to that difference are outputed as an array, otherwise the loop continues. 

React then utlizes that array to make an API call to the custom API hosted by express. Express extracts the temperatures from the URL and makes the apropiate query to the database and outputs a JSON file with the appropiate table instance. The calculation are made on the client side and the state is updated to show the user the result of the interpolation.

