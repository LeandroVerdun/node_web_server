import { envs } from './config/env.js'
import { startServer } from './server/server.js'


const main = () => {
    startServer({
      port: envs.PORT,
      public_path: envs.PUBLIC_PATH  
    })
}
//(() =. ())() funcion agnostica autoeconvocada
//agnostica porque no tiene nombre
//autoconvocada porque la ejecutamos con los () al final
( async () => {
    main()
} )()