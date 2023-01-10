export function onPasswordChange(
  event: React.ChangeEvent<HTMLInputElement>,
  setStrength: Function,
  setStrengthStyles: Function,
  strength: number
) {
  // Check password length
  let temp_strength = 0;
  if (event.target.value.length >= 8) {
    temp_strength++;
  }
  if (event.target.value.match(/[a-z]+/)) {
    temp_strength++;
  }
  if (event.target.value.match(/[A-Z]+/)) {
    temp_strength++;
  }
  if (event.target.value.match(/[0-9]+/)) {
    temp_strength++;
  }
  if (event.target.value.match(/[$@#&!]+/)) {
    temp_strength++;
  }
  setStrength(temp_strength);
  if (strength >= 4) {
    setStrengthStyles(['bg-green-mid', `${(temp_strength * 100) / 5}%`]);
  }
  if (strength === 3) {
    setStrengthStyles(['bg-yellow-mid', `${(temp_strength * 100) / 5}%`]);
  }
  if (strength <= 2) {
    setStrengthStyles(['bg-red-mid', `${(temp_strength * 100) / 5}%`]);
  }
}
