var nodes = document.querySelectorAll('.userContentWrapper a[href^="http://"][target][class^="_"][rel*="nofollow"]')
// console.log(nodes);
console.info(`removing ${nodes.length} unsecure article${nodes.length !== 1 ? 's' : ''}`);

if (nodes.length) {

  for (let i = nodes.length - 1; i >= 0; i--) {
    nodes[i].closest('.userContentWrapper').remove();
  }
}