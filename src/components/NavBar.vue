<template>
    <section>
        <div>
            <header>
                <nav>
                    <router-link v-for="route in routes" :to="route.path">{{ `${route.name[0].toLocaleUpperCase() + route.name.substring(1)} ` }}</router-link>
                </nav>
            </header>
        </div>
    </section>
    
</template>

<script>
    export default {
        name: 'NavBar',
        props: [
            'routes',
        ]
    }
</script>

<style scoped lang="scss">
    nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;
            display: block;
            
            &.router-link-exact-active {
                color: crimson;
            }
        }
    }
  </style>