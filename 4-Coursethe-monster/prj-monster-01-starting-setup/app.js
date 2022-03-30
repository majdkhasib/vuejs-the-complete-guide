function getRandomValue(min, max) {
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
      const attackValue = getRandomValue(5, 15);
      this.monsterHealth -= attackValue;
      console.log(
        `Monster got attacked with (${attackValue}) damage and his current health is:${this.monsterHealth}`
      );
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(10, 22);
      this.playerHealth -= attackValue;
      console.log(
        `Player got attacked with (${attackValue}) damage and his current health is:${this.playerHealth}`
      );
    },
    specialAttackMonster() {
      const attackValue = getRandomValue(10, 30);
      this.monsterHealth -= attackValue;
      console.log(
        `Monster got attacked with (${attackValue}) damage and his current health is:${this.monsterHealth}`
      );
      this.attackPlayer();
    },
    heal() {
      this.healPlayer();
      this.healMonster();
    },
    healPlayer() {
      const healValue = getRandomValue(10, 22);
      this.playerHealth += healValue;
      if (this.playerHealth > 100) {
        console.log(`Player can't be healed, his health is full`);
        this.playerHealth = 100;
      } else
        console.log(
          `Player got healed with (${healValue}) and his current health is:${this.playerHealth}`
        );
    },
    healMonster() {
      const healValue = getRandomValue(5, 15);
      this.monsterHealth += healValue;
      if (this.monsterHealth > 100) {
        console.log(`Monster can't be healed, his health is full`);
        this.monsterHealth = 100;
      } else
        console.log(
          `Monster got attacked with (${healValue}) and his current health is:${this.monsterHealth}`
        );
    },
  },
});
app.mount("#game");
