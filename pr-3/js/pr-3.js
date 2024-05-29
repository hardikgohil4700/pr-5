function findMinMax() {
    let arr = [5,4,3,2,1];
    let min = arr[0];
    let max = arr[0];

    for (let i = 0;i < arr.length; i++ ) {

        if (arr[i] < max)
            min =arr[i];
        
        if (arr[i] > min)
            max = arr[i];
    }
    console.log("Minimum element is:" + min);
    console.log("maxmum element is:" + max);
}
findMinMax();