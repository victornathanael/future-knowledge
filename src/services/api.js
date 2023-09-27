import axios from 'axios';

const urlApi = import.meta.env.VITE_API_URL;
const corsAnywhereUrl = import.meta.env.VITE_CORS_ANYWHERE;

// const api = axios.create({
//     baseURL: `${corsAnywhereUrl}/${urlApi}`,
// });

const api = {
    async get() {
        return Promise.resolve({
            data: [
                {
                    id: '03ed9543-c46e-4a55-be28-42d2c4231e7a',
                    name: 'George Ricardo',
                    age: '35',
                    email: 'georegricardo@gmail.com',
                    field: 'Backend',
                    points: 80,
                },
                {
                    id: '03ed9543-c46e-4a55-ba28-42d2c4231e7a',
                    name: 'Micael Junior',
                    age: '21',
                    email: 'micaquinho@gmail.com',
                    field: 'Backend',
                    points: 66,
                },

                {
                    id: '20555ce2-5f0a-4961-9f91-d62c8e010929',
                    name: 'Maria Julia',
                    age: '26',
                    email: 'julia@gmail.com',
                    field: 'Frontend',
                    points: 96,
                },

                {
                    id: '205a55ce2-5f0a-4961-9f91-d62c8e010929',
                    name: 'Nicolas Araújo',
                    age: '51',
                    email: 'nicara@gmail.com',
                    field: 'Frontend',
                    points: 29,
                },
                {
                    id: 'f8626d2b-5377-4d58-a88c-e6cae8924289',
                    name: 'David Facó',
                    age: '29',
                    email: 'davidfaco@gmail.com',
                    field: 'Marketing',
                    points: 100,
                },

                {
                    id: 'f8676d2b-5377-4d58-a88c-e6cae8924289',
                    name: 'Loma Nara',
                    age: '24',
                    email: 'lonara@gmail.com',
                    field: 'Marketing',
                    points: 71,
                },

                {
                    id: 'ceccce7a-892b-448d-b832-045b5b05ad99',
                    name: 'Bastião Prado',
                    age: '20',
                    email: 'user@example123.com',
                    field: 'Dados',
                    points: 50,
                },

                {
                    id: 'ceccce7a-2b-448d-b832-045b5b05ad99',
                    name: 'Vinicius Nascimento',
                    age: '28',
                    email: 'vini-n@example123.com',
                    field: 'Dados',
                    points: 36,
                },
                // Design People
                {
                    id: '28f8549d-0bd5-4628-b458-c5ebd59a24ca',
                    name: 'Julio Silva',
                    age: '29',
                    email: 'julio@example.com',
                    field: 'Design',
                    points: 45,
                },
                {
                    id: '9e164c4e-32fb-4e8b-af05-ef9ce5f37c61',
                    name: 'Ana Santos',
                    age: '27',
                    email: 'ana@example.com',
                    field: 'Design',
                    points: 52,
                },
                {
                    id: 'b80d665f-8dcb-428b-90a4-71a2a1bca5d5',
                    name: 'Carlos Pereira',
                    age: '31',
                    email: 'carlos@example.com',
                    field: 'Design',
                    points: 42,
                },
                {
                    id: '5f5e04a6-482e-4d3e-8e08-1a2e0ed7be84',
                    name: 'Marta Fonseca',
                    age: '28',
                    email: 'marta@example.com',
                    field: 'Design',
                    points: 49,
                },
                {
                    id: 'ee4a40a4-9b9e-4db3-8c4d-95792b18198d',
                    name: 'Pedro Gomes',
                    age: '30',
                    email: 'pedro@example.com',
                    field: 'Design',
                    points: 46,
                },
                {
                    id: '2efc9e61-2349-44c3-83f6-d788d93e32f3',
                    name: 'Rita Almeida',
                    age: '29',
                    email: 'rita@example.com',
                    field: 'Design',
                    points: 51,
                },
                {
                    id: '24b425d3-50b1-4f6d-b065-68b2b732b93a',
                    name: 'José Oliveira',
                    age: '32',
                    email: 'jose@example.com',
                    field: 'Design',
                    points: 47,
                },
                {
                    id: '7b09d346-05e0-4c60-9f86-4baf1c26e09a',
                    name: 'Sofia Costa',
                    age: '26',
                    email: 'sofia@example.com',
                    field: 'Design',
                    points: 53,
                },
                {
                    id: '1b9b9bda-9a92-4cf4-8a04-dfa186b2c349',
                    name: 'Luís Fernandes',
                    age: '28',
                    email: 'luis@example.com',
                    field: 'Design',
                    points: 44,
                },
                {
                    id: '758c63d2-92f6-413b-9e44-d8c8a3ef1f23',
                    name: 'Mariana Rodrigues',
                    age: '27',
                    email: 'mariana@example.com',
                    field: 'Design',
                    points: 50,
                },
            ],
        });
    },
};

export default api;
