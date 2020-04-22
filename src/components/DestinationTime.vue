<template>
    <div class="destination-time">
        <div class="destination-time__digits-groups">
            <div class="destination-time__digits-group">
                <div class="digits-group__title">
                    YEAR
                </div>
                <div class="digits-group__value">
                    <NumberDigit :number="2020"/>
                </div>
            </div>
            <div class="destination-time__digits-group">
                <div class="digits-group__title">
                    DAY
                </div>
                <div class="digits-group__value">
                    <NumberDigit :number="25"/>
                </div>
            </div>
            <div class="destination-time__digits-group">
                <div class="digits-group__title">
                    HOUR
                </div>
                <div class="digits-group__value">
                    <NumberDigit :number="15"/>
                </div>
            </div>
            <div class="destination-time__digits-group">
                <div class="digits-group__title">
                    MIN
                </div>
                <div class="digits-group__value">
                    <NumberDigit :number="45"/>
                </div>
            </div>
        </div>
        <div class="destination-time__title">
            DESTINATION Time
        </div>
    </div>
</template>

<script>
  import NumberDigit from './NumberDigit';

  export default {
    name: "destination-time",
    components: {NumberDigit}
  }
</script>

<style scoped>
    .destination-time {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: gray;
        padding: 5px 50px 0 50px;
        height: 230px;
        width: 100%;
    }
    .destination-time__digits-groups {
        display: flex;
        align-items: center;
    }

    .destination-time__digits-group {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .digits-group__title {
        font-size: 15pt;
        text-transform: uppercase;
        background-color: #b20000;
        padding: 5px 16px;
        letter-spacing: 3px;
        margin-bottom: 5px;
    }

    .digits-group__value {
        background-color: black;
        border: 7px outset #626262;
        border-radius: 4px;
    }

    .destination-time__title {
        font-size: 15pt;
        text-transform: uppercase;
        background-color: black;
        padding: 5px 16px;
        letter-spacing: 3px;
    }
</style>
