// async await


function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('response');
        }, 5000);
    });
}

async function asyncCall() {
    console.log('Start');
    const result = await resolveAfter2Seconds();
    console.log(result,"- result");
    console.log("end")
    // Expected output: "resolved"
}
asyncCall();



// setTimeout(() => { console.log("After 5 sec..") } , 2000)
// setInterval(() => { console.log("Got..") }, 5000)

