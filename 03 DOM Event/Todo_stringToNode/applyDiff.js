const isNodeChanged = (node1, node2) => {
  // node1.attributes 는 요소의 class, data-component 등의 정보가 있음
  const n1Attributes = node1.attributes;
  const n2Attributes = node2.attributes;

  // 속성의 수가 다름?
  if (n1Attributes.length !== n2Attributes.length) {
    return true;
  }

  // n1Attributes의 속성이 변경된 것이 있음?
  const differentAttribute = Array.from(n1Attributes).find((attribute) => {
    const { name } = attribute;
    const attribute1 = node1.getAttribute(name);
    const attribute2 = node2.getAttribute(name);

    return attribute1 !== attribute2;
  });

  // find 이기 때문에, 있으면 true일겨
  if (differentAttribute) {
    return true;
  }

  // 노드에 자식이 없고,
  // 노드의 textContent 가 동일한지?
  // 다르면 변경된 것임!
  if (
    node1.children.length === 0 &&
    node2.children.length === 0 &&
    node1.textContent !== node2.textContent
  ) {
    return true;
  }

  // 그렇지 않으면 변경없는 거임!!
  return false;
};

// index에서 이렇게 쓰임
// applyDiff(document.body, main, newMain);
const applyDiff = (parentNode, realNode, virtualNode) => {
  // 새 노드가 정의되어 있지 않으면,
  // 실제 노드 제거
  if (realNode && !virtualNode) {
    realNode.remove();
    return;
  }

  // 실제 노드는 없고, 새로운 가상 노드만 있을때
  // 부모 노드에 추가
  if (!realNode && virtualNode) {
    parentNode.appendChild(virtualNode);
    return;
  }

  // 두 노드 간의 차이 비교
  // isNodeChanged 보기 전, 이건 그러면 자식 노드의 차이까지는 비교 안하는 건가?
  // => 보고나서, 노드에 자식이 있으면 그냥 다른 조건들이 다르지 않으면, 동일하다고 판단함
  if (isNodeChanged(virtualNode, realNode)) {
    // 차이가 있을 경우, 최신화 ㄱ
    realNode.replaceWith(virtualNode);
    return;
  }

  // 모든 하위 노드에 대해 동일한 diff 알고리즘 적용
  const realChildren = Array.from(realNode.children);
  const virtualChildren = Array.from(virtualNode.children);

  const max = Math.max(realChildren.length, virtualChildren.length);
  for (let i = 0; i < max; i++) {
    // 위에서 왜 조건 문 3개가 있는지 알 수 있음!
    applyDiff(realNode, realChildren[i], virtualChildren[i]);
  }
};

export default applyDiff;
