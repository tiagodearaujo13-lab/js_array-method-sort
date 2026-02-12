'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultComparator = (a, b) => {
      const aString = String(a);
      const bString = String(b);

      if (aString < bString) {
        return -1;
      }

      if (aString > bString) {
        return 1;
      }

      return 0;
    };

    const comparator = compareFunction || defaultComparator;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const a = this[j];
        const b = this[j + 1];

        if (a === undefined) {
          if (b !== undefined) {
            const temp = this[j];

            this[j] = this[j + 1];
            this[j + 1] = temp;
          }
          continue;
        }

        if (b === undefined) {
          continue;
        }

        if (comparator(a, b) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
