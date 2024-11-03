<template>
  <div v-if="professor">
    <h2>Detalles de {{ professor.nombre }}</h2>
    <p><strong>Materia:</strong> {{ professor.subject }} </p>
    <p><strong>Descripción:</strong> {{ professor.description }}
    <p><strong>Calificación:</strong> {{ professor.qualification }} / 5</p>
    <button @click="$router.back()">Volver</button>
  </div>
  <p v-else>Cargando datos del profesor...</p>
</template>

<script>
import axios from 'axios';

export default {
    name: 'DetallesProfesores',
    data() {
        return {
            professor: null,
        };
    },
    methods: {
        async obtenerDetallesProfesor() {
          try {
            const professorId = this.$route.params.id;
            const response = await axios.get(`https://mockapi.io/professors/${professorId}`);
            this.professor = response.data;
          } catch (error) {
            console.error('Error al obtener detalles del tutor: ', error);
          }
        },
    },
    created(){
        this.obtenerDetallesProfesor();
    },
};
</script>