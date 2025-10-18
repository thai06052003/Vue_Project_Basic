import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

export const useTodoStore = defineStore('todos', () => {
    const router = useRoute();
    const txtSearch = ref('');

    const users = ref([
        {
            id: '1',
            name: 'thai',
            email: 'xuanthai0304@gmail.com',
            phone: '123'
        },
        {
            id: '2',
            name: 'Nguyen Phuong Thao',
            email: 'phuongchi@gmail.com',
            phone: '123'
        }
    ]);

    const handleChangeTxtSearch = (value) => {
        txtSearch.value = value;
    }

    const handleCreateUser = (body) => {
        users.value.push(body)
    }

    const handleDeleteUser = (id) => {
        users.value = users.value.filter(item => item.id !== id);
    }

    const handleUpdateUser = (body) => {
        const index = users.value.findIndex(item => item.id === body.id)
        if (index !== -1) {
            users.value[index].email = body.email;
            users.value[index].name = body.name;
            users.value[index].phone = body.phone;
        }
    }

    const detailUser = computed(() => {
        return users.value.find(item => item.id == router.params.id)
    })

    const filterUsers = computed(() => {
        console.log('running');
        return users.value.filter(
            (item) =>
                item.name.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1 ||
                item.email.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1
        );
    });

    return { users, 
        txtSearch, 
        filterUsers, 
        detailUser, 
        handleChangeTxtSearch, 
        handleCreateUser,
        handleDeleteUser,
        handleUpdateUser
    }
})