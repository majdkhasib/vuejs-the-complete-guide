function getAttackValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
  data() {
    return { playerHealth: 100, monsterHealth: 100 };
  },

  methods: {
    attackMonster() {
      const attackValue = getAttackValue(5, 15);
      this.monsterHealth -= attackValue;
      console.log(
        `Monster got attacked with (${attackValue}) damage and his health is:${this.monsterHealth}`
      );
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getAttackValue(10, 22);
      this.playerHealth -= attackValue;
      console.log(
        `Player got attacked with (${attackValue}) damage and his health is:${this.playerHealth}`
      );
    },
  },
});
app.mount("#game");
