<template>
  <div>
  <h3>Ingrese Usuario</h3>
  <el-input placeholder="Nombre" v-model="nombre"></el-input>
  <el-input placeholder="Contraseña" v-model="password"></el-input>
  <el-row>
  <el-button>Ingresar</el-button>
</el-row>
  </div>
</template>
<script>

export default {
  name: "login",
	data: function(){
	return{
      nombre: ' ',
	  password: '',
    }
    }
  }

</script>
