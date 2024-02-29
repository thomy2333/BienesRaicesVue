<script setup>
    import usePropiedades from '@/components/usePropiedades';
    import Propiedad from '../components/Propiedad.vue'
    import {price} from '../helpers/index.js'
    const { propiedadesFiltradas, alberca} = usePropiedades()

</script>

<template>
    <h1 class="text-center text-h3 font-weight-bold my-5">Nuestras Propiedades</h1>

    <v-card flat class="py-10">
        <v-card-title class="text-h5">
            Búsqueda
            <v-checkbox label="Alberca" v-model="alberca" />
        </v-card-title>

        <v-row>
            <Propiedad
                v-for="propiedad in propiedadesFiltradas"
                :key="propiedad.id"
                :propiedad="propiedad"
                :price="price"
            />
        </v-row>
        
    </v-card>
</template>


