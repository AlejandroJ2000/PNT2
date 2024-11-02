<tenplate>
 <div class="auth-container">
  <h2 v-if="isLogin">Iniciar Sesión</h2>
  <h2 v-else>Registro</h2>

  <form @submit.prevent="isLogin ? login() : register()">
   <div>
    <label for="email">E-mail</label>
    <input type="email" v-model="email" required />
   </div>
   <div>
    <label for="password">Contraseña</label>
    <input type="password" v-model="password" required />
   </div>
   <div v-if="!isLogin">
    <label for="role">Rol</label>
    <select v-model="role">
        <option value="student">Estudiante</option>
        <option value="professor">Profesor</option>
    </select>
   </div>
   <button type="submit">{{ isLogin ? "Iniciar Sesión" : "Registrarse" }}</button>
  </form>

  <p v-if="isLogin">¿No tienes una cuenta? <button @click="toggleAuthMode">Regístrate</button></p>
  <p v-else>¿Ya tienes una cuenta? <button @click="toggleAuthMode">Inicia Sesión</button></p>
 </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
            role: 'student',
            isLogin: true,
        };
    },
    methods: {
        toggleAuthMode() {
            this.isLogin = !this.isLogin;
        },
        async login() {
            try {
                const response = await axios.post('https://mockapi.io/login', {
                    email: this.email,
                    password: this.password,
                });
                localStorage.setItem('userToken', response.data.token);
                localStorage.setItem('userRole', response.data.role);
                this.$router.push('/');
            } catch (error) {
                console.error("Error en el inicio de sesión:", error);
            }
        },
        async register() {
            try {
                await axios.post('https://mockapi.io/register', {
                    email: this.email,
                    password: this.password,
                    role: this.role,
                });
                this.isLogin = true;
            } catch(error) {
                console.error("Error en el registro : ", error);
            }
        },
    },
};
</script>

<style>
.auth-container {
    max-width: 400px;
    margin: 0 auto;
}
</style>