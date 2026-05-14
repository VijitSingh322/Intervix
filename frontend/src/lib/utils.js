export function getDifficultyBadgeClass(difficulty) {
  switch (difficulty) {
    case "Easy":
      return "badge badge-success text-black";
    case "Medium":
      return "badge badge-warning text-black";
    case "Hard":
      return "badge badge-error text-black";
    default:
      return "badge badge-ghost";
  }
}