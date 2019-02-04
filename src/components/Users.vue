<template>

    <v-content>
      <v-container fluid grid-list-md>
        
        <v-toolbar flat color="white">
            <v-toolbar-title>Usuários</v-toolbar-title>
            <v-divider
                class="mx-2"
                inset
                vertical
            ></v-divider>
        <v-spacer></v-spacer>
        
        <v-dialog v-model="dialog" max-width="500px">
        
        <v-btn slot="activator" color="primary" dark class="mb-2">Novo Usuário</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.first_name" label="Nome"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.last_name" label="Sobrenome"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.fat" label="id"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancelar</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Salvar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    
    <v-data-table
      :headers="headers"
      :items="userList"
      class="elevation-1"
    >
        <template slot="items" slot-scope="props">
            <td :style="{'text-align': 'center'}">
                <v-avatar
                    size="36px"
                >
                <img
                    :src="props.item.avatar"
                    alt="Avatar"
                >
                </v-avatar>
            </td>

            <td class="text-xs-left">{{ props.item.first_name }}</td>
            <td class="text-xs-left">{{ props.item.last_name }}</td>
            <td class="text-xs-left">{{ props.item.id }}</td>
            <td class="justify-center layout px-0">
            <v-icon
                small
                class="mr-2"
                @click="editItem(props.item)"
            >
                edit
            </v-icon>
            <v-icon
                small
                @click="deleteItem(props.item)"
            >
                delete
            </v-icon>
            </td>
        </template>
        <template slot="no-data">
            <v-btn color="primary" @click="initialize">Resetar</v-btn>
        </template>
    </v-data-table>

      </v-container>
    </v-content>

</template>


<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Imagem de Perfil",
        align: "left",
        sortable: false,
        value: "avatar"
      },
      { text: "Nome", value: "first_name", sortable: false },
      { text: "Sobrenome", value: "last_name", sortable: false },
      { text: "id", value: "id" },
    ],
    userList: [],
    editedIndex: -1,
    editedItem: {
        avatar: "",
        first_name: "",
        last_name: "",
        id: 0,
    },
    defaultItem: {
        avatar: "",
        first_name: "",
        last_name: "",
        id: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Novo Usuário" : "Editar Usuário";
    },
    users () {
        return this.$store.state.users
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  beforeMount() {
    this.$store.dispatch({
        type: 'fetchUsers',
    })
  },

  mounted() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.userList = this.users.data
    },

    editItem(item) {
        this.$store.dispatch({
            type: 'editUser',
            payload: this.editedItem
        })
        this.editedIndex = this.userList.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
    },

    deleteItem(item) {
      const index = this.userList.indexOf(item);
      confirm("Quer mesmo deletar o usuário?") &&
        this.userList.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      this.$store.dispatch({
          type: 'createUser',
          payload: this.editedItem
      })
      if (this.editedIndex > -1) {
        Object.assign(this.userList[this.editedIndex], this.editedItem);
      } else {
        this.userList.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
