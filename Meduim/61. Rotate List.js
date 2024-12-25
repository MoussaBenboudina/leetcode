var rotateRight = function (head, k) {
  if (!head || k === 0) return head;

  let length = 1;
  let current = head;

  while (current.next) {
    current = current.next;
    length++;
  }

  k = k % length;
  console.log(k);
  if (k === length) return head;

  // console.log(length);

  current.next = head;

  for (let i = 0; i < length - k; i++) {
    // console.log(i, current);
    current = current.next;
  }

  let newHead = current.next;

  current.next = null;

  return newHead;
};
