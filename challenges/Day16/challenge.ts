export function transformTree(tree: number[]) {
  const buildTree = []
  for(let i=(tree.length - 1); i>=0; i--){
    if( tree[i] !== null )
      buildTree[i] = {
        value: tree[i],
        left: buildTree[i*2+1] ?? null,
        right: buildTree[i*2+2] ?? null
      }
  }
  return buildTree[0] ?? null;
}
