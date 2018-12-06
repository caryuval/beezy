<template>
    <div class="rounded bg-white shadow my-3">
        <h2 class="pl-2 py-2 mb-0 text-primary">
            {{ title }}
            <span class="actions">
                <a @click="add()">
                    <i class="fas fa-plus-circle align-bottom"></i>
                </a>
            </span>
        </h2>
        <slot name="after-title"></slot>
        <div style="overflow-x : auto">
            <table class="table table-hover">
                <thead class="thead-light">
                    <tr>
                        <th v-for="(column, index) in columns"
                            :key="index">
                            {{ column.visualName }}
                        </th>
                        <th class="text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index)  in rowsCopy" :key="row[rowIdProp]">
                        <td v-for="(column, columnIndex) in columns" :key="columnIndex">
                            <!-- While editing -->
                            <span v-if="'edited' in row">
                                <slot   v-if="'editSlot' in column && column.editSlot"
                                        :name="`edit-inside-${column.dataName}`"
                                        :row="row">
                                </slot>
                                <select v-else-if="column.type === 'select'"
                                        v-model="row[column.dataName]"
                                        class="form-control">
                                    <option value="" disabled> {{column.visualName}} </option>
                                    <option v-for="(option, index) in column.options"
                                            :key="index"
                                            :value="option">
                                        {{ option }}
                                    </option>
                                </select>
                                <input  v-else
                                        v-model="row[column.dataName]"
                                        :type="column.type"
                                        :placeholder="column.visualName"
                                        class="form-control">
                            </span>
                            <!-- While not editing -->
                            <slot   v-else-if="'notEditSlot' in column && column.notEditSlot"
                                    :name="`not-edit-inside-${column.dataName}`"
                                    :row="row">
                            </slot>
                            <span v-else> {{row[column.dataName]}} </span>
                        </td>
                        <td class="text-right">
                            <div class="actions">
                                <a v-if="!('edited' in row)" @click="startEditing(row, index)">
                                    <i class="fas fa-pencil-alt px-2 text-primary"></i>
                                </a>
                                <a v-if="'edited' in row" @click="send(row, index)">
                                    <i class="fas fa-check px-2 text-primary"></i>
                                </a>
                                <a @click="erase(row, index)">
                                    <i class="fas fa-trash pr-2 text-primary"></i>
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-center">
                <ValidationWarn v-show="validationErr"
                                :msg="columns.length === 1 ? 'text' : 'multiple'"
                                class="text-center mb-2">
                </ValidationWarn>
            </div>
        </div>
    </div>
</template>

<script>
import ValidationWarn from '@/components/common/ValidationWarn.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        ValidationWarn,
    },
    props: {
        title: { type: String, required: true },
        name: { type: String, required: true },
        columns: { type: Array, required: true },
        rows: { type: Array, required: true },
        rowIdProp: { type: String, required: false, default: 'id' },
    },
    data() {
        return {
            validationErr: false,
            rowsCopy: [],
        };
    },
    watch: {
        rows: {
            handler() {
                this.rowsCopy = this.rows.slice();
            },
            immediate: true,
        },
    },
    methods: {
        ...mapActions(['alert', 'settingsDelete', 'settingsEdit', 'settingsAdd']),
        isObj(column) {
            return 'isObj' in column && column.isObj;
        },
        add() {
            const tempId = Math.random();
            let newRow = { id: tempId, edited: false };
            this.columns.forEach((col) => {
                newRow = Object.assign(newRow, { [col.dataName]: '' });
            });
            this.rowsCopy.push(newRow);
        },
        startEditing(row, index) {
            let newRow = { [this.rowIdProp]: row[this.rowIdProp], edited: true };
            this.columns.forEach((col) => {
                if (typeof row[col.dataName] === 'object' && row[col.dataName] !== null) {
                    newRow = Object.assign(newRow, {
                        [col.dataName]: row[col.dataName][this.rowIdProp],
                    });
                } else {
                    newRow = Object.assign(newRow, { [col.dataName]: row[col.dataName] });
                }
            });
            this.rowsCopy.splice(index, 1, newRow);
        },
        async erase(row, index) {
            // If it is not registered in the DB delete it, if registered ask the user if he's sure
            if ('edited' in row && row.edited === false) {
                this.rowsCopy.splice(index, 1);
                this.validationErr = false;
                return;
            }
            const result = await this.alert({
                type: 'confirm',
                confirmButtonText: 'Yes, delete it!',
                title: `delete ${'name' in row ? row.name : 'this'}?`,
            });
            if (!result.value) {
                return;
            }
            await this.settingsDelete({
                name: this.name,
                id: row[this.rowIdProp],
            });
        },
        async send(row, index) {
            const response = await this.isValid(row);
            if (response === false) {
                this.validationErr = true;
                return;
            }
            this.validationErr = false;
            let data = {};
            this.columns.forEach((col) => {
                data = Object.assign(data, { [col.dataName]: row[col.dataName] });
            });
            if (row.edited === true) {
                this.settingsEdit({
                    name: this.name,
                    data,
                    id: row[this.rowIdProp],
                });
            } else {
                this.settingsAdd({
                    name: this.name,
                    data,
                });
            }
        },
        isValid(row) {
            return new Promise((resolve, reject) => {
                for (let i = 0; i < this.columns.length; i++) {
                    if (row[this.columns[i].dataName] === '' || row[this.columns[i].dataName] === null) {
                        resolve(false);
                        break;
                    }
                }
                resolve(true);
            });
        },
    },
};
</script>
