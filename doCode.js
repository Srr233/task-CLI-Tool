const doCode = (text, shift) => {
  const C_LOWER_S = 96;
  const C_LOWER_E = 122;
  const C_UPPER_S = 64;
  const C_UPPER_E = 90;
  let result = '';
  for (const letter of text) {
    const l = letter.charCodeAt();
    if (l >= C_UPPER_S && l <= C_UPPER_E) {
      const shifted = l + (shift % 26);
      const newPos = shifted === (C_UPPER_S + 1) ? shifted
        : shifted < C_UPPER_S ? C_UPPER_E - (C_UPPER_S - shifted)
          : shifted === C_UPPER_E ? shifted
            : shifted > C_UPPER_E ? C_UPPER_S + (shifted - C_UPPER_E)
              : shifted === 64 ? C_UPPER_E : shifted;
      result += String.fromCharCode(newPos);
    } else if (l >= C_LOWER_S && l <= C_LOWER_E) {
      const shifted = l + (shift % 26);
      const newPos = shifted === (C_LOWER_S + 1) ? shifted
        : shifted < C_LOWER_S ? C_LOWER_E - (C_LOWER_S - shifted)
          : shifted === C_LOWER_E ? shifted
            : shifted > C_LOWER_E ? C_LOWER_S + (shifted - C_LOWER_E)
              : shifted === 96 ? C_LOWER_E : shifted;
      result += String.fromCharCode(newPos);
    } else {
      result += letter;
    }
  }
  return result;
}

module.exports = doCode;