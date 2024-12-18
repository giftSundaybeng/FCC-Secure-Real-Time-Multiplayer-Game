class Player {
  constructor({ x, y, score, id }) {
    this.x = x; // X-coordinate of the player
    this.y = y; // Y-coordinate of the player
    this.score = score; // Player's score
    this.id = id; // Unique ID for the player
  }

  /**
   * Move the player in a given direction with a specific speed.
   * @param {string} dir - Direction to move ('up', 'down', 'left', 'right').
   * @param {number} speed - The amount of pixels to move.
   */
  movePlayer(dir, speed) {
    switch (dir) {
      case "up":
        this.y -= speed;
        break;
      case "down":
        this.y += speed;
        break;
      case "left":
        this.x -= speed;
        break;
      case "right":
        this.x += speed;
        break;
      default:
        throw new Error("Invalid direction provided to movePlayer");
    }
  }

  /**
   * Detect collision with a collectible item.
   * @param {object} item - The collectible item object.
   * @returns {boolean} - True if there is a collision, otherwise false.
   */
  collision(item) {
    const playerSize = 20; // Assume player avatar is 20x20 pixels
    const itemSize = 20; // Assume item is 20x20 pixels

    // Check if the player's area intersects with the item's area
    return (
      this.x < item.x + itemSize &&
      this.x + playerSize > item.x &&
      this.y < item.y + itemSize &&
      this.y + playerSize > item.y
    );
  }

  /**
   * Calculate the player's rank among all players based on score.
   * @param {array} arr - Array of player objects.
   * @returns {string} - The rank in the format "Rank: currentRanking/totalPlayers".
   */
  calculateRank(arr) {
    // Sort players by score in descending order
    const sortedPlayers = arr.sort((a, b) => b.score - a.score);
    
    // Find the player's rank
    const rank = sortedPlayers.findIndex(player => player.id === this.id) + 1;

    return `Rank: ${rank}/${sortedPlayers.length}`;
  }
}

export default Player;
