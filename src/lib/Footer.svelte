<script>
    import liIcon from '$lib/assets/icons/linkedin.svg';
    import mailIcon from '$lib/assets/icons/mail.svg';
    import phone from '$lib/assets/icons/phone.svg';
</script>

<div class="footer mb-16">
    <div class="icon-container grid grid-cols-1 md:grid-cols-3">
        <div class="icon flex flex-col gap-2 items-center">
            <img src={liIcon} alt="">
            <a href="#">LinkedIn</a>
        </div>
        <div class="icon flex flex-col gap-2 items-center">
            <img src={mailIcon} alt="">
            <a href="#">hello@mjux.dk</a>
        </div>
        <div class="icon flex flex-col gap-2 items-center">
            <img src={phone} alt="">
            <a href="#">+45 28 91 44 41</a>
        </div>
    </div>
    <div class="signoff text-center mt-32">
        By Michael Jensen - 2023
    </div>

</div>

<style lang="scss">
    .footer {
        margin-top: 4rem;
    }
    .signoff {
        color: var(--vague-color);
    }
</style>