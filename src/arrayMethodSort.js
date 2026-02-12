'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        let shouldSwap = false;
        const a = this[j];
        const b = this[j + 1];

        if (compareFunction) {
          if (compareFunction(a, b) > 0) {
            shouldSwap = true;
          }
        } else {
          if (String(a) > String(b)) {
            shouldSwap = true;
          }
        }

        if (shouldSwap) {
          const temp = this[j];

          this[j] = this[j + 1];

          this[j + 1] = temp;
        }
      }
    }

    return this;
  };

  [].__proto__.sort = [].__proto__.sort2;
}

module.exports = applyCustomSort;
