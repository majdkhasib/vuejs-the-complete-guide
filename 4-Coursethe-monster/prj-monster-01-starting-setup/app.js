function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function logData(logs, who, type, value) {
  logs.unshift({ id: new Date().toISOString(), who, type, value });
}
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      winner: null,
      battleLogs: [],
    };
  },
  computed: {
    monsterHealthStyles() {
      return { width: `${this.monsterHealth}%` };
    },
    playerHealthStyles() {
      return { width: `${this.playerHealth}%` };
    },
    gameResult() {
      if (this.winner === "PLAYER") {
        return "Player won!!!";
      } else if (this.winner === "MONSTER") {
        return "Monster won!!!";
      } else {
        return "Draw!!!";
      }
    },
  },

  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "DRAW";
      } else if (value <= 0) {
        this.winner = "MONSTER";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "DRAW";
      } else if (value <= 0) {
        this.winner = "PLAYER";
      }
    },
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 15);
      this.monsterHealth -= attackValue;
      logData(this.battleLogs, "MONSTER", "ATTACK", attackValue);
      console.log(
        `Monster got attacked with (${attackValue}) damage and his current health is:${this.monsterHealth}`
      );
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(10, 22);
      this.playerHealth -= attackValue;
      logData(this.battleLogs, "PLAYER", "ATTACK", attackValue);

      console.log(
        `Player got attacked with (${attackValue}) damage and his current health is:${this.playerHealth}`
      );
    },
    specialAttackMonster() {
      const attackValue = getRandomValue(10, 30);
      this.monsterHealth -= attackValue;
      logData(this.battleLogs, "MONSTER", "ATTACK", attackValue);

      console.log(
        `Monster got attacked with (${attackValue}) damage and his current health is:${this.monsterHealth}`
      );
      this.attackPlayer();
    },
    playerSurrendered() {
      this.winner = "MONSTER";
    },
    heal() {
      this.healPlayer();
      this.healMonster();
    },
    healPlayer() {
      const healValue = getRandomValue(10, 22);
      this.playerHealth += healValue;
      logData(this.battleLogs, "PLAYER", "HEAL", healValue);

      if (this.playerHealth > 100) {
        console.log(`Player can't be heal, his health is full`);
        this.playerHealth = 100;
      } else
        console.log(
          `Player got healed with (${healValue}) and his current health is:${this.playerHealth}`
        );
    },
    healMonster() {
      const healValue = getRandomValue(5, 15);
      this.monsterHealth += healValue;
      logData(this.battleLogs, "MONSTER", "HEAL", healValue);
      if (this.monsterHealth > 100) {
        console.log(`Monster can't be healed, his health is full`);
        this.monsterHealth = 100;
      } else
        console.log(
          `Monster got attacked with (${healValue}) and his current health is:${this.monsterHealth}`
        );
    },
    battleLogPlayerClasses(battleLog) {
      return battleLog.who === "PLAYER" ? "log--player" : "log--monster";
    },
    battleLogValueClasses(battleLog) {
      return battleLog.type === "ATTACK" ? "log--damage" : "log--heal";
    },
    reset() {
      this.winner = null;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.logs = [];
      console.clear();
    },
  },
});
app.mount("#game");
