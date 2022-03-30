function getAttackValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
  data() {
    return { playerHealth: 100, monsterHealth: 100 };
  },
  computed: {
    monsterHealthStyles() {
      return { width: `${this.monsterHealth}%` };
    },
    playerHealthStyles() {
      return { width: `${this.playerHealth}%` };
    },
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
    specialAttackMonster() {
      const attackValue = getAttackValue(10, 30);
      this.monsterHealth -= attackValue;
      console.log(
        `Monster got attacked with (${attackValue}) damage and his health is:${this.monsterHealth}`
      );
      this.attackPlayer();
    },
  },
});
app.mount("#game");
