
// // fs.writeFile
// // fs.appendFile
// // fs.copyFile
// // fs.rename
// // fs.unlink




// // ye file write krta hai
// fs.writeFile("hey.txt", "hey everyone", function (err) { // this string part is editable, agar ek baar run krne ke baad change kroge aur phirse se run kroge to hey.txt me text change hokar milega
//     if(err) console.log(err)
//     else console.log("done"); // if done, ek file create hui hogi jiska naam hey.txt hoga, aur uske andar jo bhi data pass ki gayi hai vah likh di jayegi
// })

// // ye file me likhe huye mein add krta hai
// // append matlab aage jodna
// fs.appendFile("hey.txt", `, this is ashish tetarwal \nkaise ho ${30000000000}`, (err) => {
//     if(err) console.log(err);
//     else console.log('done');
// })

// // ab file ko rename bhi kr skte hain
// // fs.rename(oldPath, newPath, callBack)
// fs.rename('hey.txt', 'hello.txt', (err) => {
//     if(err) console.log(err);
//     else console.log('done');
// })

// // ab copy file
// // fs.copyFile(src, destination, callback)
// fs.copyFile('./hello.txt', './copy/copyHello.txt', function(err){
//     if(err) console.log(err);
//     else console.log('done');
// }) 