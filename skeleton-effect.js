<style>
.skeleton {
    position: relative;
    background-color: transparent;
    border: 0;
    border-radius: 0.4rem;
    overflow: hidden;
    pointer-events: none;
    user-select: none;
    box-shadow: none;
}

.skeleton::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(224, 224, 224, 1);
    z-index: 1;
}

.skeleton::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%);
    z-index: 2;
    animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
    0% {
        left: -100%;
    }
    100% {
        left: 100%;
    }
}

body.skeleton-scroll-lock {
    overflow: hidden; 
}
</style>

<script>
    function applySkeletonEffect() {
        const skeletonDivs = document.querySelectorAll('[data-skeleton="true"]');

        skeletonDivs.forEach(div => {
            div.classList.add('skeleton');
        });
        
        document.body.classList.add('skeleton-scroll-lock');


        setTimeout(() => {
            skeletonDivs.forEach(div => {
                div.classList.remove('skeleton');
            });

            document.body.classList.remove('skeleton-scroll-lock');
        }, 2000);
    }

    document.addEventListener('DOMContentLoaded', applySkeletonEffect);
</script>
