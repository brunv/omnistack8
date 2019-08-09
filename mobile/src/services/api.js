import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3031'
});

export default api;

/**
 * Para usar esse tipo de URL (localhost) normalmente,
 * no Android precisamos fazer:
 *
 * $ adb rever tcp:3031 tcp:3031
 *
 * Para que ele redirecione as portas que Android tenta
 * acessar, para as que o computador utiliza
 */