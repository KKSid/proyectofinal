<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="grid-content">
          <el-card>
              <div slot="header" class="clearfix">
                  <span >Formulario</span>
                </div>
             <el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="nombre">
     <el-input placeholder=" " v-model="nombre"></el-input>
  </el-form-item>
  <el-form-item label="apellido">
   <el-input placeholder=" " v-model="apellido"></el-input>
    </el-select>
  </el-form-item>
  <el-form-item label="ciudad">
    <el-input placeholder=" " v-model="ciudad"></el-input>
  </el-form-item>
  <el-form-item label="sexo ">
    <el-input placeholder=" " v-model="sexo"></el-input>
  </el-form-item>
  <el-form-item label="fecha de nacimiento">
   <el-input placeholder="DD/MM/YYYY" v-model="fecha"></el-input>
  </el-form-item>
   <p>Estado</p>
    <el-switch v-model="estado" active-text="Activo" inactive-text="Inactivo" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>

    <el-form-item label="direccion de entrega">
    <el-input placeholder=" " v-model="direccion"></el-input>
  </el-form-item>
  <el-form-item>
 <el-button type="primary" @click="guardar">Guardar</el-button>
  </el-form-item>
</el-form>
          </el-card>
          
        </div>
        </el-col>

        <el-col :span="20">
        <div class="grid-content">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="nombre"
                label="Nombre"
                width="180">
              </el-table-column>
              <el-table-column
                prop="apellido"
                label="Apellido"
                width="180">
              </el-table-column>
              <el-table-column
                prop="ciudad"
                label="Ciudad"
                width="180">
              </el-table-column>
              <el-table-column
                prop="sexo"
                label="sexo">
              </el-table-column>
              <el-table-column
                prop="fecha"
                label="Fecha de Nacimiento"
                width="180">
              </el-table-column>
              <el-table-column
                prop="estado"
                label="Estado">
              </el-table-column>
              <el-table-column
                prop="direccion"
                label="Direccion"
                width="180">
              </el-table-column>

              
            </el-table>
     </div>
     </el-col>
</el-row>
      </div>
</template>
<script>

export default {
  name: "Usuarios",
	data: function(){
	return{
      nombre: ' ',
      apellido: '',
	  ciudad: '',
      sexo: '',
      fecha: '',
      estado: true,
      direccion: '',
      tableData: [{
          nombre: null,
          apellido: null,
          ciudad: null,
          sexo: null, 
          Estado: null,
          direccion: null, 
      }],
    }
    },
  methods:{
      guardar: function() {
          this.tableData.push({
              nombre: this.nombre,
              apellido: this.apellido,
              ciudad: this.ciudad,
              sexo: this.sexo,
              estado: this.estado ? 'Activo' : 'Inactivo',
              direccion: this.direccion,
          } 
          )
      }
  }
  }


</script>