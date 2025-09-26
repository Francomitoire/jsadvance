import promptSync from 'prompt-sync'; // For ES Modules
const prompt = promptSync();

// MATI
class FileDonwload { 
    constructor(nombre, size, unit){
        this.nombre = nombre
        this.size = size
        this.unit = unit
        this.fileSize = size + unit
    }
    download(){
        return new Promise((resolve, reject)=>{
            console.log(`Downloading ${this.nombre}...`)
            setTimeout(()=>{
            const downloadError = (Math.random() > 0.75)
            if(downloadError){
                reject(`DOWNLOAD ERROR: due to unknown causes, ${this.nombre} coudln't download.\nPlease try again later.`)
            }
            resolve(`${this.nombre} se descargo exitosamente`)
        }, this.size * 5) 
        })
    }
}

const file1 = new FileDonwload("Hollow knight.apk",462,"MB")
const file2 = new FileDonwload("planetaVegetta episodio3.mp4",200,"MB")
const file3 = new FileDonwload("EmptyFile.txt",2,"MB")
const file4 = new FileDonwload("hentai.mp4",1000,"MB")



async function promiseMethodsExecution(){

    //Promise.all
    prompt("\nPresione enter para ver el funcionamiento de Promise.all")
    await Promise.all([file1.download(), file2.download(), file3.download(), file4.download()])
    .then((file)=>{
        console.log(file)
    })
    .catch((errorMsg)=>{
        console.log(errorMsg)
    })



    //Promise.allSettled
    prompt("\nPresione enter para ver el funcionamiento de Promise.allSettled")
    await Promise.allSettled([file1.download(), file2.download(), file3.download(), file4.download()])
    .then((file)=>{
        console.log(file)
    })
    .catch((errorMsg)=>{
        console.log(errorMsg)
    })



    //Promise.any
    prompt("\nPresione enter para ver el funcionamiento de Promise.any")
    await Promise.any([file1.download(), file2.download(), file3.download(), file4.download()])
    .then((file)=>{
        console.log(file)
    })
    .catch((errorMsg)=>{
        console.log(errorMsg)
    })



    //Promise.race
    prompt("\nPresione enter para ver el funcionamiento de Promise.race")
    await Promise.race([file1.download(), file2.download(), file3.download(), file4.download()])
    .then((file)=>{
        console.log(file)
    })
    .catch((errorMsg)=>{
        console.log(errorMsg)
    })
}
promiseMethodsExecution()
// DAVID
// ALEX
// DIEGO