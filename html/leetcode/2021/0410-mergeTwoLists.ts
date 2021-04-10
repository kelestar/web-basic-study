/*-------------------------------------------------------------------------------
 * @Description: 合并两个升序链表
 * @fileName: 0410-mergeTwoLists.ts
 * @Author: hc_zheng
 * @Date: 2021/04/10 21:22:51
 * @LastEditors: hc_zheng
--------------------------------------------------------------------------------*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if(!l1) return l2;
  if(!l2) return l1;
  let merge = null;
  let mergehead = null;
  let left = l1;
  let right = l2;

  while (left != null && right != null) {
    let temp = null;
    if (left.val <= right.val) {
      temp = new ListNode(left.val);
      left = left.next;
    } else {
      temp = new ListNode(right.val);
      right = right.next;
    }
    if (!merge) {
      merge = temp;
      mergehead = merge;
    }
    else {
      merge.next = temp;
      merge = merge.next;
    }
  }
  if (left) merge.next = left;
  if (right) merge.next = right;
  return mergehead;
};

let i = 0;
let l1 = null;
let list1 = l1;
while (i > 0) {
  l1.next = new ListNode(Math.floor(Math.random() * 10));
  l1 = l1.next;
  i--;
}
console.log("================");
i = 1;
let l2 = new ListNode(5);
let list2 = l2;
while (i > 0) {
  l2.next = new ListNode(Math.floor(Math.random() * 10));
  l2 = l2.next;
  i--;
}

let a = mergeTwoLists(list1, list2);

function deeplist(node: ListNode | null) {
  if(node) {
    console.log(node.val);
    deeplist(node.next);
  }
}
deeplist(list1);
console.log("--------------");

deeplist(list2);
console.log("--------------");

deeplist(a);