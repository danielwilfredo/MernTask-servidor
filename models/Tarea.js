const mongoose = require('mongoose');

//definir el schema
const TareaSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim:true

    },
    estado:{
        type: Boolean,
        default: false
    },
    creado:{
        type: Date,
        default: Date.now()
    },
    proyecto:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proyecto'
    }
})

module.exports=mongoose.model('Tarea', TareaSchema);