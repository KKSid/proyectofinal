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
  <el-form-item label="nombre del proyecto">
     <el-input placeholder=" " v-model="nombre"></el-input>
  </el-form-item>
  <el-form-item label="fecha de lazamiento">
   <el-input placeholder="DD/MM/YYYY" v-model="fecha"></el-input>
  </el-form-item>
  <el-input
  type="textarea"
  :rows="2"
  placeholder="Descripcion"
  v-model="Descripcion">
</el-input>  
  <el-form-item label="Categoria">
    <el-select v-model="value" placeholder="Categoria">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="Licencia">
    <el-select v-model="value2" placeholder="Licencia">
    <el-option
      v-for="item in options2"
      :key="item.value2"
      :label="item.label2"
      :value="item.value2">
    </el-option>
  </el-select>
  </el-form-item>
    <el-form-item label="Link/repositorio">
    <el-input placeholder=" " v-model="Link"></el-input>
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
                prop="fecha"
                label="fecha"
                width="180">
              </el-table-column>
              <el-table-column
                prop="Descripcion"
                label="Descripcion"
                width="180">
              </el-table-column>
              <el-table-column
                prop="value"
                label="Categoria"
                width="180">
              </el-table-column>
              <el-table-column
                prop="value2"
                label="Licencia"
                width="180">
              </el-table-column>
              <el-table-column
                label="Link">
                <template slot-scope="scope">
                  <a :href= " scope.row.Link "> {{ scope.row.Link }}</a>
                </template>
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
    form: {},
    nombre: ' ',
    fecha: '',
	  Descripcion: '',
    options: [{
          value: 'Web',
          label: 'Web'
        }, {
          value: 'HTTP',
          label: 'HTTP'
        }, {
          value: 'Mobil',
          label: 'Mobil'
        }, {
          value: 'Interactivo',
          label: 'Interactivo'
        }, {
          value: 'Otros',
          label: 'Otros'
        }],
        value: '',
           options2: [{
          value2: 'Apache',
          label2: 'Apache 2.0'
        }, {
          value2: 'GPL',
          label2: 'GPL'
        }, {
          value2: 'GNU LGPL',
          label2: 'GNU LGPL'
        }, {
          value2: 'AGPL',
          label2: 'AGPL'
        }, {
          value2: 'Otras',
          label2: 'Otras'
        }],
        value2: '',
        Link: '',
      tableData: [{
           
      }],
    }
    },
  methods:{
      guardar: function() {
          this.tableData.push({
              nombre: this.nombre,
              fecha: this.fecha,
              Descripcion: this.Descripcion,
              value: this.value,
              value2: this.value2,

              Link: this.Link,
          } 
          )
      }
  }
  }


</script>