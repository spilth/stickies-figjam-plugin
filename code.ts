const clone = (value) => JSON.parse(JSON.stringify(value));

const setFill = (
  node: StickyNode,
  red: number,
  green: number,
  blue: number
) => {
  const fills = clone(node.fills);
  fills[0].color.r = red;
  fills[0].color.g = green;
  fills[0].color.b = blue;
  node.fills = fills;
};

figma.on("selectionchange", () => {
  const nodes = figma.currentPage.findAllWithCriteria({ types: ["STICKY"] });

  nodes.forEach((node) => {
    let text = node.text.characters.toLowerCase();

    if (text.startsWith("i like")) {
      setFill(node, 0.52, 0.88, 0.64);
    }

    if (text.startsWith("i wish")) {
      setFill(node, 1.0, 0.69, 0.64);
    }

    if (text.startsWith("i wonder")) {
      setFill(node, 1.0, 0.77, 0.44);
    }
  });
});
