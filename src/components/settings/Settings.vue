<template>
    <main class="py-5 bg-light">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <SettingsTable  title="Books"
                                    name="books"
                                    :rows="lists.books"
                                    :columns="booksColumns">
                        <template slot="edit-inside-genre" slot-scope="slotProps">
                            <select v-model="slotProps.row.genre"
                                    class="form-control">
                                <option value="" disabled> Genre </option>
                                <option v-for="genre in lists.genres"
                                        :key="genre.id"
                                        :value="genre.id">
                                    {{ genre.name }}
                                </option>
                            </select>
                        </template>
                        <template slot="not-edit-inside-genre" slot-scope="slotProps">
                            {{slotProps.row.genre.name}}
                        </template>
                    </SettingsTable>
                </div>
                <div class="col-sm-8 col-lg-6">
                    <SettingsTable  title="Genres"
                                    name="genres"
                                    :rows="lists.genres"
                                    :columns="genresColumns">
                    </SettingsTable>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapGetters } from 'vuex';
import SettingsTable from './sub/SettingsTable.vue';

export default {
    components: {
        SettingsTable,
    },
    data() {
        return {
            activeSection: 'Books',
            booksColumns: [
                {
                    dataName: 'title',
                    visualName: 'Title',
                    type: 'text',
                },
                {
                    dataName: 'image',
                    visualName: 'Image URL',
                    type: 'text',
                },
                {
                    dataName: 'author',
                    visualName: 'Author',
                    type: 'text',
                },
                {
                    dataName: 'genre',
                    visualName: 'Genre',
                    type: 'select',
                    options: [],
                    notEditSlot: true,
                    editSlot: true,
                },
                {
                    dataName: 'price',
                    visualName: 'Price €',
                    type: 'number',
                },
            ],
            genresColumns: [
                {
                    dataName: 'name',
                    visualName: 'Name',
                    type: 'text',
                },
            ],

        };
    },
    computed: {
        ...mapGetters([
            'lists',
        ]),
    },
    methods: {
    },
};
</script>
