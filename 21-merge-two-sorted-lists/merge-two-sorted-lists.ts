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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    
    // Create a dummy head
    const dummy = new ListNode(0);
    let tail = dummy;

    // While both lists have nodes
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    // If either list still has nodes, append the rest
    if (list1 !== null) {
        tail.next = list1;
    } else if (list2 !== null) {
        tail.next = list2;
    }

    // Return the real head, skipping dummy node
    return dummy.next;
}