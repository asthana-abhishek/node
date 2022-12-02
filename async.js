console.log('start');

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('processing');
    }, 2000);
})
waitingData.then((data)=>{
    console.log(data)
})
console.log('end');