const waitingData = new Promise((resolve,reject)=>{    
    setTimeout(()=>{
        resolve()
    },2000)
}).then(()=>{
    console.log('one');
}).then((data)=>{
    console.log('two');
}).then((data)=>{
    console.log('three');
})