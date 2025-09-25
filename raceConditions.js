// MATI WORK
function runSimulation(){
    const usuarios = []
    const entradas = []
    const tickets = []
    for(let i = 1; i <= 15; i++){
        usuarios.push(`usuario${i}`)
        if(i<=10){
            entradas.push(`entrada${i}`)
        }
    }
    
    const sacarEntradas = async ()=>{
        const promesasEntradas = usuarios.map((usuario)=>{
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    if(entradas.length !== 0){
                        const cantidadEntradas = Math.floor(Math.random() * entradas.length) + 1
                        const ticket = {
                            nombre: usuario,
                            entradasUsuario : []
                        }
                        for(let i = 0; i < cantidadEntradas; i++){
                            ticket.entradasUsuario.push(entradas.shift())
                        }

                        resolve(ticket)
                    }else{
                        reject(`Lo siento ${usuario}, se han acabado las entradas`)
                    }
                }, Math.random() * 5000)
            })
        })
    }
    sacarEntradas()
}
runSimulation()
// DAVID WORK
// IVAN WORK
// ALEX WORK
// DIEGO WORK
