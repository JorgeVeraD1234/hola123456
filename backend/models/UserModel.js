import {Schema, model} from "mongooe"


const Esquema = new Schema ({
    name:{
        type:String
    }
})


export const modelo1 = new model("Tabla de alumnos", Esquema1)

