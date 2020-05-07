<template>
    <div>
        <table class="gulu-table" :class="{bordered, compact, striped: striped }">
            <thead>
            <tr>
                <th><input type="checkbox"></th>
                <th v-if="numberVisible">#</th>
                <th v-for="column in columns">
                    {{column.text}}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in dataSource">
                <th><input type="checkbox" @change="onChangeItem(item, index, $event)"></th>
                <td v-if="numberVisible">{{index + 1}}</td>
                <template v-for="column in columns">
                    <td>{{item[column.field]}}</td>
                </template>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            striped: {
                type: Boolean,
                default: true
            },
            compact: {
                type: Boolean,
                default: false
            },
            columns: {
                type: Array,
                require: true
            },
            dataSource: {
                type: Array,
                require: true
            },
            numberVisible: {
                type: Boolean,
                default: false
            },
            bordered: {
                type: Boolean,
                default: true
            }

        },

        methods: {
            onChangeItem(item, index, e) {
                this.$emit("changeItem", {selected: e.target.checked, item, index})
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/var";

    $grey: darken($grey, 10%);

    .gulu-table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        border-bottom: 1px solid $grey;

        &.bordered {
            border: 1px solid $grey;

            th, td {
                border: 1px solid $grey;
            }
        }

        &.bordered {
            th, td {
                padding: 4px;
            }
        }

        &.striped {
            tbody {
                > tr {
                    &:nth-child(odd) {
                        background-color: white;
                    }

                    &:nth-child(even) {
                        background-color: lighten($grey, 15%);
                    }
                }
            }
        }

        th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid $grey;
        }
    }
</style>
