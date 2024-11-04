<nav>
  <ul>
    <li><router-link to ="/">Inicio</router-link></li>
    <li><router-link to ="/login">Iniciar Sesión</router-link></li>
    <li><router-link to= "/profesores">Buscar Profesores</router-link></li>
    <li v-if="isStudent"><router-link to ="/mis-reservas">Mis Reservas</router-link></li>
    <li v-if="isProfessor"><router-link to ="/gestionar-sesiones">Gestionar Sesiones</router-link></li>
    <li v-if="isAdmin"><router-link to ="/administrador">Panel de Administración</router-link></li>
    <li><router-link to ="/perfil">Mi Perfil</router-link></li>
    <li><button @click="logout">Cerrar Sesión</button></li>
  </ul>
</nav>


<script>
  export default {
    name: 'Navbar',
    data() {
        return {
            userRole: '',
        };
    },
    computed: {
        isStudent() {
            return this.userRole === 'student';
        },
        isProfessor() {
            return this.userRole === 'professor';
        },
        isAdmin() {
            return this.userRole === 'admin';
        },
    },
    methods: {
        logout() {
            localStorage.removeItem('userToken);
            this.$router.push('/login')
        },
    },
    mounted() {
        this.userRole = localStorage.getItem('userRole');
    },
  };
</script>

<style>
  nav ul {
    list-style-type: none;
  }
  nav ul li {
    display: inline;
    marging-right: 20 px
  }
</style>