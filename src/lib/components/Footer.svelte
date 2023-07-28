<script>
    import liIcon from '$lib/assets/icons/linkedin.svg';
    import mailIcon from '$lib/assets/icons/mail.svg';
    import phone from '$lib/assets/icons/phone.svg';
</script>

<div class="container footer mt-24 md:mt-32 lg:mt-40 mb-16">
    <div class="icon-container grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        <div class="icon flex flex-col gap-2 items-center">
            <img src={liIcon} alt="LinkedIn icon">
            <a href="https://www.linkedin.com/in/mj-ux/">LinkedIn</a>
        </div>
        <div class="icon flex flex-col gap-2 items-center">
            <img src={mailIcon} alt="Email icon">
            <a href="mailto:michael@vendila.dk">michael@vendila.dk</a>
        </div>
        <div class="icon flex flex-col gap-2 items-center">
            <img src={phone} alt="Telephone icon">
            <a href="tel:+4528914441">+45 28 91 44 41</a>
        </div>
    </div>
    <div class="signoff text-center mt-20 md:mt-32">
        By Michael Jensen - 2023
    </div>

</div>

<style lang="scss">

    .signoff {
        color: var(--vague-color);
    }
</style>