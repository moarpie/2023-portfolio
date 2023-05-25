<div class="card {$$props.class}">
    <slot></slot>
</div>

<style>
    .card {
        background: var(--card-background-color);
        border-radius: var(--card-border-radius);
        padding: var(--card-padding);
    }
    .elevation-1 {
        box-shadow: 
            var(--elevation-1-x) 
            var(--elevation-1-y) 
            var(--elevation-1-blur) 
            var(--elevation-1-color); 
    }
    .elevation-2 {
        box-shadow: 
            var(--elevation-2-x) 
            var(--elevation-2-y) 
            var(--elevation-2-blur) 
            var(--elevation-2-color); 
    }
    .elevation-3 {
        box-shadow: 
            var(--elevation-3-x) 
            var(--elevation-3-y) 
            var(--elevation-3-blur) 
            var(--elevation-3-color); 
    }
    .elevation-4 {
        box-shadow: 
            var(--elevation-4-x) 
            var(--elevation-4-y) 
            var(--elevation-4-blur) 
            var(--elevation-4-color); 
    }
</style>